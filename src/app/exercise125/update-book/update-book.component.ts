import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdvanceBook } from 'src/app/interfaces/advance-book';
import { AdvanceBookService } from 'src/app/services/advance-book.service';
import { omit } from 'lodash';
import { UploadService } from 'src/app/services/upload.service';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent {
  public updateBookForm: FormGroup;
  public book: IAdvanceBook | undefined;
  public errorMessage: string = '';
  public file: File | undefined;
  public bookCoverImage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private advanceBookService: AdvanceBookService,
    private uploadService: UploadService
  ) {
    this.updateBookForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      name: this.formBuilder.control(''),
      price: this.formBuilder.control(0),
      description: this.formBuilder.control(''),
      quantity: this.formBuilder.control(0),
      publishingCompanyId: this.formBuilder.control(0),
    });
  }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const bookId = Number(routeParams.get('id'));
    this.getBook(bookId);
  }

  private getBook(id: number): void {
    this.advanceBookService.getBook(id).subscribe({
      next: (book: IAdvanceBook) => {
        this.book = book;
        this.getBookCoverImage();
        this.updateBookForm.patchValue(omit(book, ['coverImage', 'updatedAt']));
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }

  private getBookCoverImage(): void {
    if (this.book?.coverImage) {
      this.uploadService.getCoverImage(this.book?.coverImage).subscribe({
        next: (image: Blob) => {
          this.bookCoverImage = URL.createObjectURL(image);
        },
        error: (error: Error) => {
          this.errorMessage = error.message;
        },
      });
    }
  }

  public onFileSelected(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const selectedFile = target?.files?.[0];
    if (selectedFile) {
      this.file = selectedFile;
    }
  }

  public uploadFile(): Observable<string> {
    if (this.file) {
      const formData = new FormData();
      formData.append('image', this.file ?? new Blob(), this.file?.name ?? '');
      return this.uploadService.uploadCoverImage(formData);
    }
    return of(this.book?.coverImage ?? '');
  }

  public onSubmit(): void {
    this.uploadFile()
      .pipe(
        switchMap((coverImage: string) => {
          const payload: IAdvanceBook = {
            ...this.updateBookForm.value,
            coverImage,
          };
          return this.advanceBookService.replaceBook(payload);
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/exercise-125']);
        },
        error: (error: Error) => {
          this.errorMessage = error.message;
        },
      });
  }
}
