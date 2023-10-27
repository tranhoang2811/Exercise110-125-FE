import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise114Component } from './exercise114/exercise114.component';
import { Exercise116Component } from './exercise116/exercise116.component';
import { Exercise118Component } from './exercise118/exercise118.component';
import { Exercise120Component } from './exercise120/exercise120.component';
import { Exercise122Component } from './exercise122/exercise122.component';
import { Exercise124Component } from './exercise124/exercise124.component';
import { BookListComponent } from './exercise125/book-list/book-list.component';
import { CreateBookComponent } from './exercise125/create-book/create-book.component';
import { UpdateBookComponent } from './exercise125/update-book/update-book.component';

const routes: Routes = [
  {
    path: 'exercise-114',
    component: Exercise114Component,
  },
  {
    path: 'exercise-116',
    component: Exercise116Component,
  },
  {
    path: 'exercise-118',
    component: Exercise118Component,
  },
  {
    path: 'exercise-120',
    component: Exercise120Component,
  },
  {
    path: 'exercise-122',
    component: Exercise122Component,
  },
  {
    path: 'exercise-124',
    component: Exercise124Component,
  },
  {
    path: 'exercise-125',
    component: BookListComponent,
  },
  {
    path: 'exercise-125/new',
    component: CreateBookComponent,
  },
  {
    path: 'exercise-125/:id',
    component: UpdateBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
