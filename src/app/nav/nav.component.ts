import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { ROUTER_DIRECTIVES } from '@angular/router';
declare  var $:any;

@Component({
  selector: 'lib-nav',
  templateUrl: './src/app/nav/nav.component.html',
  styleUrls:  ['./src/app/nav/nav.component.css'],
  pipes: [TranslatePipe],
  directives:[ROUTER_DIRECTIVES]
})
export class NavComponent {
   onSelect(event:any) {
     $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class','active');
     $(event.target).closest('li').addClass('active');
   }
 }
