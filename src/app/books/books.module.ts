import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent],
  providers: [BooksService],
  imports: [
    CommonModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
