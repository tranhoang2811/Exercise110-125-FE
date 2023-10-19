import { Component } from '@angular/core';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-exercise116',
  templateUrl: './exercise116.component.html',
  styleUrls: ['./exercise116.component.css'],
})
export class Exercise116Component {
  public book: IBook | undefined;
  public errorMessage: string = '';
  public bookId: string = '';

  constructor(private bookService: BookService) {}

  public getBook(): void {
    this.bookService.getBook(this.bookId).subscribe({
      next: (book: IBook) => {
        this.book = book;
        this.errorMessage = '';
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
