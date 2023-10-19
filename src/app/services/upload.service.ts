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

}
