import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-tags',
  templateUrl: './post-tags.component.html',
  styleUrls: ['./post-tags.component.scss']
})
export class PostTagsComponent implements OnInit {

  tags: string[] = ['Tag uno', 'Tag dos', 'Tag tres', 'Tag cuatro', 'Tag cinco', 'Tag seis', 'Tag siete', 'Tag ocho', 'Tag nueve', 'Tag diez']
  constructor() { }

  ngOnInit(): void {
  }

}
