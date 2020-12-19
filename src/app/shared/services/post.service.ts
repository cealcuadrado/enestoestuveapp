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
    let cleanTag = tag.toLowerCase();
    return this.http.get<Post[]>(`${this.url}`)
      .pipe(map(posts => posts.filter(post => {
        return post.tags.map(tag => tag.toLowerCase()).includes(cleanTag);
      })));
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post[]>(`${this.url}`).pipe(map(posts => posts.filter(post => post.id === id)[0]));
  }

  searchPost(query: string): Observable<Post[]> {
    let cleanQuery = query.toLowerCase();
    return this.http.get<Post[]>(`${this.url}`)
      .pipe(map(posts => posts.filter(post => {
        return (
          post.title.toLowerCase().includes(cleanQuery)
          || post.content.toLowerCase().includes(cleanQuery)
          || post.moreContent.toLowerCase().includes(cleanQuery)
          || post.tags.map(tag => tag.toLowerCase()).includes(cleanQuery)
        );
      })));
  }
}
