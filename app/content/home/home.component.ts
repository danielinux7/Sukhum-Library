import { Component } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'lib-home',
  templateUrl: './app/content/home/home.component.html',
  styleUrls:  ['./app/content/home/home.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class HomeComponent {
  html_template = `./app/content/home/home_`;
  html: string;

  constructor(translate: TranslateService) {
        this.html = this.html_template + translate.currentLang;

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
          this.html = this.html_template + translate.currentLang;
    });
  }

 }
