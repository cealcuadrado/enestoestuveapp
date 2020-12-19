import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-tags',
  templateUrl: './post-tags.component.html',
  styleUrls: ['./post-tags.component.scss']
})
export class PostTagsComponent implements OnInit {

  @Input() tags: string[];

  constructor() { }

  ngOnInit(): void {
  }

  setTagName(str: string) {
    let newStr = str.replace(/\s/g, '+');
    return newStr;
  }
}
