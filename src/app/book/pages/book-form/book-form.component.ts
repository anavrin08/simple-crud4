import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm:FormGroup;

  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private bookService:BookService) {

    //this.bookID = this.route.snapshot.paramMap.get('id');
    //let book = (this.bookService.getBook(this.bookID));

    this.bookForm = this.fb.group({
      name: [''],
      authors: this.fb.array([]), 
      isbn:['']
    });
    
   }

  ngOnInit(): void {
    
  }

  get authors(): FormArray{
    return this.bookForm.get("authors") as FormArray;
  }

  newAuthor(): FormGroup{
    return this.fb.group({author: ''})
  }

  addAuthor(){
    this.authors.push(this.newAuthor());
  }

  removeAuthor(i:number){
    this.authors.removeAt(i);
  }
  
  submitBook() {
    console.log(this.bookForm.value)
  }

  editBook(id: any){
  
  }

  deleteBook(id: any){

  }

}
