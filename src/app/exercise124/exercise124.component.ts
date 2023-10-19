import { Component } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-exercise124',
  templateUrl: './exercise124.component.html',
  styleUrls: ['./exercise124.component.css'],
})
export class Exercise124Component {
  public file: File | undefined;

  constructor(private uploadService: UploadService) {}

  public onFileSelected(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const selectedFile = target?.files?.[0];
    if (selectedFile) {
      this.file = selectedFile;
    }
  }

  public onUpload(): void {
    if (this.file) {
      const formData = new FormData();
      formData.append('image', this.file, this.file.name);
      this.uploadService.uploadSingleFile(formData).subscribe({
        next: () => {
          console.log('File uploaded successfully');
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
