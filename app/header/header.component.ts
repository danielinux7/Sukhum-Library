import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Auth } from './../services/auth.service';
declare var $:any;
@Component({
  selector: 'lib-header',
  templateUrl: './app/header/header.component.html',
  styleUrls:  ['./app/header/header.component.css'],
  pipes: [TranslatePipe],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit{
  constructor(private auth: Auth) {}

  ngOnInit (){
    $('.slick-carousel').slick({
      arrows: false,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      adaptiveHeight: true
    });  }
 }
