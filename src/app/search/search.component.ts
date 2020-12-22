import { PostService } from './../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from '../shared/interfaces/post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  query: string;
  posts: Post[];

  page: number;
  maxItemsPerPage = 6;

  constructor(
    private activatedRoute: ActivatedRoute,
    private post: PostService,
    private window: Window
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.page = 1;
      if (params.query) {
        this.query = params.query;
        this.post.searchPost(this.query).subscribe((posts) => {
          this.posts = posts;
        });
      }
    });
  }

  onPageChange(event: any): void {
    this.page = event;
    this.window.scrollTo({
      top: 0,
    });
  }
}
