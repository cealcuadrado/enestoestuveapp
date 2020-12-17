import { Post } from './../shared/interfaces/post';
import { PostService } from './../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  id: string;
  showMore: true;

  loadedPost: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private post: PostService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        let id = parseInt(this.id);
        this.post.getPost(id).subscribe(post => {
          this.loadedPost = post;
        });
      }
    });
  }

}
