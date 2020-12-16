import { Post } from './../interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() showMore: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
