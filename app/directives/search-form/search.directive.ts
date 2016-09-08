import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { Router } from '@angular/router';
import { Search } from './../../models/search.model';

@Component({
  selector: 'search-form',
  templateUrl: './app/directives/search-form/search.directive.html',
  styleUrls:  ['./app/directives/search-form/search.directive.css'],
  pipes: [TranslatePipe]
})
export class SearchDirective {

  constructor(private router: Router , private model: Search) {}

  onSubmit() {
    this.model.type = "basic";
    this.model.startIndex = 0;
    this.router.navigate(["/search"]);
 }
}
