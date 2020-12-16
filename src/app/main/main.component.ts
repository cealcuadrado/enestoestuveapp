import { PostService } from './../shared/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private post: PostService
  ) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

}
