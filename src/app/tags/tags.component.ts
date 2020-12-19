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
  navigationSubscription;

  page = 1;

  posts: Post[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private post: PostService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit(): void {

  }

  initialiseInvites() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.tag) {
        this.tag = this.setCleanTag(params.tag);
        this.post.getPostsByTag(this.tag).subscribe(posts => {
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

  ngOnDestroy() {
  }
}
