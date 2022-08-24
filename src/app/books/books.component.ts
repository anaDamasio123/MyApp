import { Component, OnInit } from '@angular/core';

interface Book {
  name:string
  author:string
  image:string,
  amount:number
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'clean code',
      author: 'robert C. martin',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 700
    },
    {
      name: 'pragramatic programmer',
      author: ' david thomas',
      image: 'https://m.media-amazon.com/images/I/51W1sBPO7tL._AC_UY218_.jpg',
      amount: 800
    }
  ]
  
  isShowing: boolean = true;


  constructor() { }

  ngOnInit(): void {}

}
