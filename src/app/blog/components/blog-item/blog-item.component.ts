import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blogsArray: Blog | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sendBlogIDandEdit(){
    console.log("Edit Blog: " + this.blogsArray?.id)
    this.router.navigate(['book/form'])
  }

  sendBlogIDandDelete(){
    console.log("Delete Blog: " + this.blogsArray?.id)  
  }
}
