import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-exercise120',
  templateUrl: './exercise120.component.html',
  styleUrls: ['./exercise120.component.css'],
})
export class Exercise120Component {
  public replaceBookForm: FormGroup;
  public books: IBook[] = [];
  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {
    this.replaceBookForm = this.formBuilder.group({
      BookId: this.formBuilder.control(''),
      BookName: this.formBuilder.control(''),
      Price: this.formBuilder.control(''),
    });
    this.getBooks();
  }

  public onSubmit(): void {
    this.bookService.replaceBook(this.replaceBookForm.value).subscribe({
      next: () => {
        this.getBooks();
        this.errorMessage = '';
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: IBook[]) => {
        this.books = books;
        this.errorMessage = '';
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
