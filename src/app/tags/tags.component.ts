import { Observable } from 'rxjs';
import { PostService } from './../shared/services/post.service';
import { Post } from './../shared/interfaces/post';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit, OnDestroy {
  tag: string;
  private navigationSubscription;

  page = 1;
  maxItemsPerPage = 6;

  posts: Post[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private post: PostService,
    private router: Router,
    private window: Window
  ) {
    this.navigationSubscription = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit(): void {}

  initialiseInvites() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.tag) {
        this.tag = this.setCleanTag(params.tag);
        this.post.getPostsByTag(this.tag).subscribe((posts) => {
          this.posts = posts;
        });
      }
    });

    this.navigationSubscription.unsubscribe();
  }

  setCleanTag(str: string) {
    let newStr = str.replace(/\+/g, ' ');
    return newStr;
  }

  onPageChange(event: any): void {
    this.page = event;
    this.window.scrollTo({
      top: 0,
    });
  }

  ngOnDestroy() {}
}
