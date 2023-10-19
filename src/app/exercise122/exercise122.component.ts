import { Component } from '@angular/core';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-exercise122',
  templateUrl: './exercise122.component.html',
  styleUrls: ['./exercise122.component.css'],
})
export class Exercise122Component {
  public books: IBook[] = [];
  public errorMessage: string = '';
  public bookId: string = '';

  constructor(private bookService: BookService) {
    this.getBooks();
  }

  public deleteBook(): void {
    this.bookService.deleteBook(this.bookId).subscribe({
      next: () => {
        this.getBooks();
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
