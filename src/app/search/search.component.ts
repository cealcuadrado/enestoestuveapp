import { PostService } from './../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces/post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  posts: Post[];

  page = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private post: PostService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.query) {
        this.query = params.query;
        console.log(this.query);
        this.post.searchPost(this.query).subscribe(posts => {
          this.posts = posts;
        });
      }
    });
  }

}
