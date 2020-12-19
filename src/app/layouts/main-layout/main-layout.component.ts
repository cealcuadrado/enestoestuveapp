import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  private currentScrollY: number;
  public showUpIcon: boolean;

  constructor(
    private window: Window
  ) { }

  ngOnInit(): void {
    this.onScroll();
  }

  onScroll(event?: any): void {
    this.currentScrollY = window.scrollY;
    this.showUpIcon = (this.currentScrollY >= 50) ? true : false;
  }

  scrollToTop($event: boolean) {
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
