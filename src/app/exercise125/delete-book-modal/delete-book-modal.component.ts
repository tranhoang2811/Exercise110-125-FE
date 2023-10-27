import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdvanceBookService } from 'src/app/services/advance-book.service';

@Component({
  selector: 'app-delete-book-modal',
  templateUrl: './delete-book-modal.component.html',
  styleUrls: ['./delete-book-modal.component.css'],
})
export class DeleteBookModalComponent {
  @Input() bookId: number | undefined;
  @Input() bookName: string | undefined;

  constructor(
    private activeModal: NgbActiveModal,
    private advanceBookService: AdvanceBookService
  ) {}

  public deleteBook(): void {
    if (this.bookId) {
      this.advanceBookService.deleteBook(this.bookId).subscribe({
        next: () => {
          window.location.reload();
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  public closeModal(): void {
    this.activeModal.close();
  }
}
