import { PostService } from './../shared/services/post.service';
import { Post } from './../shared/interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypesComponent implements OnInit {
  type: string;
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
      if (params.type) {
        this.type = params.type;
        let type = this.type.toLowerCase();
        this.post.getPostsByType(type).subscribe((posts) => {
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
