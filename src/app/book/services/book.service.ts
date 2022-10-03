import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksArray: Book[] = [

    {
      id: 1,
      name: "Book1",
      authors: ["Author A", "Author B", "Author C"],
      isbn: "111111111"
    },

    {
      id: 2,
      name: "Book2",
      authors: ["Author D", "Author E", "Author F"],
      isbn: "222222222"
    },

    {
      id: 3,
      name: "Book3",
      authors: ["Author G", "Author H", "Author I"],
      isbn: "333333333"
    }

  ];

  constructor() { }

  displayBook() {
    return this.booksArray;
  }

  getBook(id: number) {
    return this.booksArray[id];
  }
  
}
