import { Component } from '@angular/core';
import { IBook } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-exercise114',
  templateUrl: './exercise114.component.html',
  styleUrls: ['./exercise114.component.css'],
})
export class Exercise114Component {
  public books: IBook[] = [];
  public errorMessage: string = '';

  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe({
      next: (books: IBook[]) => {
        this.books = books;
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
