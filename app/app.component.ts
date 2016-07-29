import { Component, OnInit } from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
declare var $:any;
@Component({
  selector: 'lib-app',
  templateUrl: './app/app.component.html',
  styleUrls:  ['./app/app.component.css'],
  pipes: [TranslatePipe],
  directives:[HeaderComponent, NavComponent, ContentComponent, FooterComponent],
  providers: [TranslateService]
})
export class AppComponent implements OnInit{
  userLang = 'en';

  ngOnInit (){
    $('.v4-tease').remove().insertAfter('.bg');
    if (this.userLang === 'ar') {
        this.setRTL();
    }
  }

  constructor(translate: TranslateService) {
          var userLang = navigator.language.split('-')[0]; // use navigator lang if available
          userLang = /(ru|en|tr|ar)/gi.test(userLang) ? userLang : 'en';
           // this language will be used as a fallback when a translation isn't found in the current language
          translate.setDefaultLang('en');
          translate.currentLang = userLang;
           // the lang to use, if the lang isn't available, it will use the current loader to get them
          translate.use(userLang);
          this.userLang = userLang;
      }

    setRTL(){
      $('lib-content') !== undefined && $('lib-content').addClass('rtl-dir');
      $('.app-rtl') !== undefined && $('.app-rtl').addClass('rtl-rotate');
      $('.app-rtl .search') !== undefined && $('.app-rtl .search').addClass('rtl-dir');
    }

 }
