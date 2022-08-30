import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  private booksService: BooksService;

  constructor() {
    this.booksService = new BooksService('Sarthak');
  }

  card: Book[] = [];
  
  isShowing: boolean = true;


  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  addToCard(book: Book) {
    console.log(book);
  }
}
