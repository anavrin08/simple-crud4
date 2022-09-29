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
    alert("Edit Blog: " + this.booksArray?.name)
    this.router.navigate(['book/form'])
  }

  sendBookIDandDelete(){
    alert("Are you sure to delete '" + this.booksArray?.name + "'") 
    this.BookIDDeleteEmitter.emit(this.booksArray?.id)
  }

}
