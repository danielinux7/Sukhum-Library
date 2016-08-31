import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { Router } from '@angular/router';

@Component({
  selector: 'search-form',
  templateUrl: './app/directives/search-form/search.directive.html',
  styleUrls:  ['./app/directives/search-form/search.directive.css'],
  pipes: [TranslatePipe]
})
export class SearchComponent {
  model = new search(0, '', 'basic', 20);

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(["/search", this.model]);
 }
}

export class search {
  constructor(
    public index: number,
    public query: string,
    public type: string,
    public count: number,
    public sortBy?: string,
    public boolOp?: string
  ) {  }
}
