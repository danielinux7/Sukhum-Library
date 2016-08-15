import { Component, OnInit } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { ContentService } from './../../services/content.service'

@Component({
  selector: 'lib-news',
  templateUrl: './app/content/news/news.component.html',
  styleUrls:  ['./app/content/news/news.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class NewsComponent implements OnInit{
  errorMessage: string;
  html: string;

  constructor(private translate: TranslateService,private content:ContentService) {

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getContent('news_'+this.translate.currentLang);
    });
  }

  ngOnInit (){
    this.getContent('news_'+this.translate.currentLang);
  }

  getContent(name:string) {
     this.content.getContent(name)
                     .subscribe(
                       currentcontent => this.html = currentcontent ,
                       error =>  this.errorMessage = <any>error);
  }

}
