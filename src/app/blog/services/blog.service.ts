import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogsArray:Blog[] = [
    {
      id: 1,
      title: "Title A",
      description: "Desc A",
      author: "Author A",
      comments: ["Comment 1", "Comment 2", "Comment 3"]
    },

    {
      id: 2,
      title: "Title B",
      description: "Desc B",
      author: "Author B",
      comments: ["Comment 4", "Comment 5", "Comment 6"]
    },  

    {
      id: 3,
      title: "Title C",
      description: "Desc C",
      author: "Author C",
      comments: ["Comment 7", "Comment 8", "Comment 9"]
    }
  ];

  constructor() { }

  displayBlogs(){
    return this.blogsArray;
  }
}
