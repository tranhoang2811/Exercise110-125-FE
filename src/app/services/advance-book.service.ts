import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IAdvanceBook } from '../interfaces/advance-book';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AdvanceBookService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getBooks(): Observable<IAdvanceBook[]> {
    return this.httpClient
      .get<IAdvanceBook[]>('/advance-books')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public getBook(id: number): Observable<IAdvanceBook> {
    return this.httpClient
      .get<IAdvanceBook>(`/advance-books/${id}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public createBook(book: Partial<IAdvanceBook>): Observable<IAdvanceBook> {
    return this.httpClient
      .post<IAdvanceBook>('/advance-books', book)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public replaceBook(book: IAdvanceBook): Observable<IAdvanceBook> {
    return this.httpClient
      .put<IAdvanceBook>(`/advance-books/${book.id}`, book)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public deleteBook(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`/advance-books/${id}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
