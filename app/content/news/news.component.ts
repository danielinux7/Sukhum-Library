import { Component } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'lib-news',
  templateUrl: './app/content/news/news.component.html',
  styleUrls:  ['./app/content/news/news.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class NewsComponent {
  html_template = `./app/content/news/news_`;
  html: string;

  constructor(translate: TranslateService) {
        this.html = this.html_template + translate.currentLang;

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
          this.html = this.html_template + translate.currentLang;
    });
  }

 }
