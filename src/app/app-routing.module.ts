import { ViewBlogComponent } from './Components/View Blog/view-blog/view-blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './Components/Add blog/add-blog/add-blog.component';
import { ListBlogsComponent } from './Components/List blogs/list-blogs/list-blogs.component';
import { EditBlogComponent } from './Components/Edit Blog/edit-blog/edit-blog.component';

const routes: Routes = [
  { path: '', component: ListBlogsComponent },
  { path: 'listblog', component: ListBlogsComponent },
  { path: 'addblog', component: AddBlogComponent },
  { path: 'edit/:id', component:EditBlogComponent},
  {path:'view/:id',component:ViewBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
