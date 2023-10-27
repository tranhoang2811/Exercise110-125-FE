import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAdvanceBook } from 'src/app/interfaces/advance-book';
import { AdvanceBookService } from 'src/app/services/advance-book.service';
import { DeleteBookModalComponent } from '../delete-book-modal/delete-book-modal.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  public books: IAdvanceBook[] = [];
  public errorMessage: string = '';

  constructor(
    private advanceBookService: AdvanceBookService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.advanceBookService.getBooks().subscribe({
      next: (books: IAdvanceBook[]) => {
        this.books = books;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  public gotoCreateBookForm(): void {
    this.router.navigate(['/exercise-125/new']);
  }

  public gotoBookDetail(id: number): void {
    this.router.navigate([`/exercise-125/${id}`]);
  }

  public openDeleteBookModal(id: number, name: string): void {
    const deleteBookModal = this.modalService.open(DeleteBookModalComponent);
    deleteBookModal.componentInstance.bookId = id;
    deleteBookModal.componentInstance.bookName = name;
  }
}
