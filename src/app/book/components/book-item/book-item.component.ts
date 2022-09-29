import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  
  @Input() booksArray:Book | undefined;
  @Output() BookIDEditEmitter = new EventEmitter();
  @Output() BookIDDeleteEmitter = new EventEmitter();
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  sendBookIDandEdit(){
    console.log("Edit Book: " + this.booksArray?.id)
    this.BookIDEditEmitter.emit(this.booksArray?.id)
    this.router.navigate(['book/form'])
  }

  sendBookIDandDelete(){
    console.log("Delete Book: " + this.booksArray?.id) 
    this.BookIDDeleteEmitter.emit(this.booksArray?.id)
    this.router.navigate(['book/form'])
  }

}
