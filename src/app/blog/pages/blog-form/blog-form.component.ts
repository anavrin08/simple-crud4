import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})

export class BlogFormComponent implements OnInit {
 
  blogForm:FormGroup;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.blogForm = fb.group({
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([])
    })
   }

  ngOnInit(): void {
  }

  get comments():FormArray{
    return this.blogForm.get("comments") as FormArray
  }
 
  newComment():FormGroup{
    return this.fb.group({comment: ''})
  }

  addComment(){
    this.comments.push(this.newComment())
  }

  removeComment(i:number){
    this.comments.removeAt(i);
  }

  submitBlog(){
    console.log(this.blogForm.value)
  }

  
}
