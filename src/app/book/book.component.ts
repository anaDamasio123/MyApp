import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      console.log('hello');
    }, 1000)
  }

  ngOnDestroy(): void {
    console.log({ ngOnDestroy: 'onDestroy' });
  }

  addToCard() {
    this.bookEmitter.emit(this.book);
  }
}
