import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-post',
  templateUrl: './default-post.component.html',
  styleUrls: ['./default-post.component.scss']
})
export class DefaultPostComponent implements OnInit {

  @Input() showMore: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
