import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'lib-nav',
  templateUrl: './app/nav/nav.component.html',
  styleUrls:  ['./app/nav/nav.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class NavComponent { }
