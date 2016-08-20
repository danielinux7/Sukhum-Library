import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CSSCarouselComponent } from './../directives/carousel/carousel.component';

@Component({
  selector: 'lib-header',
  templateUrl: './app/header/header.component.html',
  styleUrls:  ['./app/header/header.component.css'],
  pipes: [TranslatePipe],
  directives: [ROUTER_DIRECTIVES, CSSCarouselComponent]
})
export class HeaderComponent {

 }
