import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise114Component } from './exercise114/exercise114.component';
import { Exercise116Component } from './exercise116/exercise116.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exercise118Component } from './exercise118/exercise118.component';
import { Exercise120Component } from './exercise120/exercise120.component';
import { Exercise122Component } from './exercise122/exercise122.component';
import { Exercise124Component } from './exercise124/exercise124.component';
import { CreateBookComponent } from './exercise125/create-book/create-book.component';
import { UpdateBookComponent } from './exercise125/update-book/update-book.component';
import { BookListComponent } from './exercise125/book-list/book-list.component';
import { DeleteBookModalComponent } from './exercise125/delete-book-modal/delete-book-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise114Component,
    Exercise116Component,
    Exercise118Component,
    Exercise120Component,
    Exercise122Component,
    Exercise124Component,
    CreateBookComponent,
    UpdateBookComponent,
    BookListComponent,
    DeleteBookModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
