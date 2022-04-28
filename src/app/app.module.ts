import {  MaterialModule} from './Module/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListBlogsComponent } from './Components/List blogs/list-blogs/list-blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBlogComponent } from './Components/Add blog/add-blog/add-blog.component';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BlogFormComponent } from './Components/Blog Form/blog-form/blog-form.component';
import { EditBlogComponent } from './Components/Edit Blog/edit-blog/edit-blog.component';
import { ViewBlogComponent } from './Components/View Blog/view-blog/view-blog.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListBlogsComponent,
    AddBlogComponent,
    BlogFormComponent,
    EditBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
