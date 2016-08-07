import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'lib-header',
  templateUrl: './src/app/header/header.component.html',
  styleUrls:  ['./src/app/header/header.component.css'],
  pipes: [TranslatePipe],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {

 }
