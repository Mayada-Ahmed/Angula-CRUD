import { observable, Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { blog } from 'src/app/Models/Blog.model';
import { BlogService } from 'src/app/Services/blog.service';




@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private router:Router) { }

  model:any = {};

  print(){
    console.log(this.userid)
    console.log(this.model)
  }

  userid: any = 0;
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (params:ParamMap)=>this.userid = params.get("id"));
    this.blogService.getById(parseInt(this.userid)).subscribe(blog =>
          this.model = blog
    );
    
    
  }

  saveChanges(obj:any) {
    // console.log(obj)
    this.model.title = obj.title;
    this.model.body = obj.body;
    // console.log(this.model)
    
    this.blogService.edit(this.model.id, this.model).subscribe(
      data=> console.log(data),
      err=>{
        console.log(err)
      } 
    );
    this.router.navigate(['/listblog'])
  }
  

}
