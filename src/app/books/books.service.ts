import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }

  getBooks() {

    return [
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
      },
      {
        name: 'art of the computer programming',
        author: 'donald john fuller',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41msKv2oN9L._SY429_BO1,204,203,200_.jpg',
        amount: 500
      },
      {
        name: 'introduction to algorithms',
        author: 't. connen',
        image: 'https://mit-press-us.imgix.net/covers/9780262046305.jpg?auto=format&w=260&dpr=1&q=20',
        amount: 850
      }
    ];
  }
}

class Name {
  constructor(name: string) {}
}
