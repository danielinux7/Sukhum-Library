import { Component, OnInit } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, TranslatePipe, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { NewsService } from './../../services/news.service';

@Component({
  selector: 'lib-news',
  templateUrl: './app/content/news/news.component.html',
  styleUrls:  ['./app/content/news/news.component.css'],
  directives: [DynamicHTMLOutlet],
  pipes: [TranslatePipe]
})
export class NewsComponent implements OnInit {
  errorMessage: string;
  html: string;
  news = [News];
  paging = {'previous':'', 'next':''};
  html_template = `./app/content/news/news_`;

  constructor(private translate: TranslateService,  private newsService: NewsService) {}

  ngOnInit (){
    this.getNews();
    this.html = this.html_template + this.translate.currentLang;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.html = this.html_template + this.translate.currentLang;
    });
  }

  getNews() {
     this.newsService.getNews()
                     .subscribe(
                       (news:any) => { this.news = news.data; this.paging = news.paging },
                       error =>  this.errorMessage = <any>error);
  }

 }

 export class News {
  message: string;
  picture: string;
  name: string;
  type: string;
}
