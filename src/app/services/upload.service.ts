import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public uploadSingleFile(formData: FormData): Observable<void> {
    return this.httpClient
      .post<void>('/upload/single', formData)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public uploadCoverImage(formData: FormData): Observable<string> {
    return this.httpClient
      .post<string>('/advance-books/cover-image', formData)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public getCoverImage(fileName: string): Observable<Blob> {
    return this.httpClient
      .get(`/advance-books/cover-image/${fileName}`, { responseType: 'blob' })
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
