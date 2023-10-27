import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { IAdvanceBook } from 'src/app/interfaces/advance-book';
import { AdvanceBookService } from 'src/app/services/advance-book.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent {
  public createBookForm: FormGroup;
  public errorMessage: string = '';
  public file: File | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private uploadService: UploadService,
    private advanceBookService: AdvanceBookService
  ) {
    this.createBookForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      name: this.formBuilder.control(''),
      price: this.formBuilder.control(0),
      description: this.formBuilder.control(''),
      quantity: this.formBuilder.control(0),
      publishingCompanyId: this.formBuilder.control(0),
    });
  }

  public async onSubmit(): Promise<void> {
    this.uploadFile()
      .pipe(
        switchMap((coverImage: string) => {
          const payload: IAdvanceBook = {
            ...this.createBookForm.value,
            coverImage,
          };
          return this.advanceBookService.createBook(payload);
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/exercise-125']);
        },
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
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
      formData.append('image', this.file, this.file.name);
      return this.uploadService.uploadCoverImage(formData);
    }
    return of('');
  }
}
