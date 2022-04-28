import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { blog} from '../Models/Blog.model';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + '/blogs'


  getAll(): Observable<blog[]> {
    return this.http.get<blog[]>(this.apiURL)
  }

  // getById(id: number): Observable<blog> {
  //   return this.http.get<blog>('${ this.apiURL } / ${ id }');
  // }

  getById(id:number) {
    return this.http.get<blog>(`${this.apiURL}/${id}`)
  }

  edit(id:number,blog:blog){
    return this.http.put(`${this.apiURL}/${id}`,blog).pipe(
      catchError(
        (err)=> throwError(err.message || "somthing went wrong")
      )
    );
  }

  create(blog:blog){
    return this.http.post(this.apiURL,blog)
  }

  delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
