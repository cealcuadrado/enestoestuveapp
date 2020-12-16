import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-post-tags',
  templateUrl: './default-post-tags.component.html',
  styleUrls: ['./default-post-tags.component.scss'],
})
export class DefaultPostTagsComponent implements OnInit {
  tags: string[] = [
    'Tag uno',
    'Tag dos',
    'Tag tres',
    'Tag cuatro',
    'Tag cinco',
    'Tag seis',
    'Tag siete',
    'Tag ocho',
    'Tag nueve',
    'Tag diez',
  ];
  constructor() {}

  ngOnInit(): void {}
}
