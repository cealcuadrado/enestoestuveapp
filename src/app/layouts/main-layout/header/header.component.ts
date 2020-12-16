import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchQuery: FormControl;

  form: FormGroup;

  isMenuCollapsed: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isMenuCollapsed = true;

    this.searchQuery = new FormControl('');

    this.form = this.formBuilder.group({
      searchQuery: this.searchQuery
    });
  }

  toggleCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeCollapse(): void {
    this.isMenuCollapsed = true;
  }

  submitQuery()  {
    let searchQuery = this.form.value.searchQuery;
    this.router.navigate(['/search', searchQuery]);
  }
}
