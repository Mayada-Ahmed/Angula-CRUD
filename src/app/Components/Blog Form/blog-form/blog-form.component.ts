import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { insertBlog } from 'src/app/Models/Blog.model';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  @Input()
  model:insertBlog = { title: '', body: '', date: new Date }

  @Output()
  onSaveChanges = new EventEmitter<insertBlog>();

  constructor(private fb: FormBuilder, private router: Router) { }
  form = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    // date: ['', [Validators.required]],
  });

  ngOnInit(): void {
    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  cancel() {
    this.router.navigate(['/blogs']);
  }

  getErrorMsg() {
    const field = this.form.get('title');
    if (field?.hasError('required')) {
      return 'The title is required'
    } else {
      return '';
    }
  }

  getErrorMsgBody() {
    const field = this.form.get('body');
    if (field?.hasError('required')) {
      return 'The body is required'
    } else {
      return '';
    }
  }
}
