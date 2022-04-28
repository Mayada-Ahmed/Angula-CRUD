import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private blogService: BlogService) { }
  addBlogForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  date:any = new Date().toISOString();

  saveChanges(p: any) {
    p.date = this.date;
    console.log(p);
    this.blogService.create(p).subscribe(
      data=> console.log(data),
      err=>{
        console.log(err)
      } 
    );
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  getErrorMsg() {
    const field = this.addBlogForm.get('title');
    if (field?.hasError('required')) {
      return 'The title is required'
    } else {
      return '';
    }
  }

  getErrorMsgBody() {
    const field = this.addBlogForm.get('body');
    if (field?.hasError('required')) {
      return 'The body is required'
    } else {
      return '';
    }
  }

  ngOnInit(): void {
  }

}
