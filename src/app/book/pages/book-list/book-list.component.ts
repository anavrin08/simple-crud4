import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  booksArray?:Book[] = [];
  
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.booksArray = this.bookService.displayBook();
  }

}
