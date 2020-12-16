import { Post } from './../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'assets/data/data.json';
  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`)
  }

  getPostsByType(type: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`).pipe(map(posts => posts.filter(post => post.type === type)));
  }

  getPostsByTag(tag: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`).pipe(map(posts => posts.filter(post => post.tags.includes(tag))));
  }
}
