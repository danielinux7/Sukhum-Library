import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'lib-nav',
  templateUrl: './app/nav/nav.component.html',
  styleUrls:  ['./app/nav/nav.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class NavComponent {
   onSelect(event) {
    //  $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class','active');
    //  $(event.target).closest('li').addClass('active');
   }
 }
