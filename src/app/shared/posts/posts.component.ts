import { PostService } from './../services/post.service';
import { Post } from './../interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(
    private post: PostService
  ) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
