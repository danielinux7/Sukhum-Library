import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'lib-header',
  templateUrl: './app/header/header.component.html',
  styleUrls:  ['./app/header/header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
  title = 'Национальная Библиотека Абхазия';
  title_en = 'Abkhazia National Library';
 }
