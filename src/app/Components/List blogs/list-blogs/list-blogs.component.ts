import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { blog } from 'src/app/Models/Blog.model';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {
  blogs: blog[] = [];
  displayedColumn = ['Title', 'Actions']
  swal: object = 
  {
    title:'Confirmation',
    text:'Are you sure that you want to delete the record?',
    showCancelButton:true
  }

  constructor(private blogService: BlogService, private router:Router) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(){
    this.blogService.getAll().subscribe(blogs => {
      this.blogs = blogs;
      console.log(blogs)
    });
  }

  delete(id:number){
    this.blogService.delete(id).subscribe(()=>{
      this.loadBlogs();
    });
  }

}
