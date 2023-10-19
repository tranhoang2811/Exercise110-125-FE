import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IBook } from '../interfaces/book';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getBooks(): Observable<IBook[]> {
    return this.httpClient
      .get<IBook[]>('/books')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public getBook(id: string): Observable<IBook> {
    return this.httpClient
      .get<IBook>(`/books/${id}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public createBook(book: Partial<IBook>): Observable<IBook> {
    return this.httpClient
      .post<IBook>('/books', book)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public replaceBook(book: IBook): Observable<IBook> {
    return this.httpClient
      .put<IBook>(`/books/${book.BookId}`, book)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public deleteBook(id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`/books/${id}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
