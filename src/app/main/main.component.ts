import { Post } from './../shared/interfaces/post';
import { PostService } from './../shared/services/post.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  posts: Post[];

  page = 1;
  maxItemsPerPage = 6;

  constructor(
    private post: PostService,
    private window: Window
  ) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onPageChange(event: any): void {
    this.page = event;
    this.window.scrollTo({
      top: 0,
    });
  }

}
