import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SearchDirective } from './../directives/search-form/search.directive';
declare  var $:any;

@Component({
  selector: 'lib-nav',
  templateUrl: './app/nav/nav.component.html',
  styleUrls:  ['./app/nav/nav.component.css'],
  pipes: [TranslatePipe],
  directives:[ROUTER_DIRECTIVES, SearchDirective]
})
export class NavComponent {
   onSelect(event) {
     $('.active')[0] !== undefined && $('.active').removeClass('active');
     $(event.target).closest('li').addClass('active');
     $('.navbar-collapse').collapse('hide');
   }
 }
