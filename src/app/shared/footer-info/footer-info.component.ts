import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.scss']
})
export class FooterInfoComponent implements OnInit {

  currentDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

}
