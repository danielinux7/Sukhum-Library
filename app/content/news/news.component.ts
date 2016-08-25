import { Component, OnInit } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, TranslatePipe, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
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
  constructor(private translate: TranslateService,  private newsService: NewsService, private sanitize:DomSanitizationService ) {}

  ngOnInit (){
    this.getNews((this.translate.currentLang === 'ab'?'es':this.translate.currentLang));
    this.html = this.html_template + this.translate.currentLang;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.html = this.html_template + this.translate.currentLang;
      this.getNews((this.translate.currentLang === 'ab'?'es':this.translate.currentLang));
    });
  }

  getNews(lang: string) {
     this.newsService.getNews(lang)
                     .subscribe(
                       (news:any) => {
                                      //  Otherwise we get unsafe url source on iframe, need to refactor
                                       for (let i = 0; i < news.data.length; i++) {
                                         if (news.data[i].link && news.data[i].link.match('youtube')) {
                                           news.data[i].url = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ news.data[i].link.split('v=')[1]+'?hl=en&amp;autoplay=0&amp;cc_load_policy=0&amp;loop=0&amp;iv_load_policy=1&amp;fs=1&amp;showinfo=1');
                                         }
                                         else if (news.data[i].link && news.data[i].link.match('facebook')){
                                           news.data[i].url = this.sanitize.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/video.php?href='+news.data[i].link);
                                         }
                                       }
                                       this.news = news.data;
                                       this.paging = news.paging },
                       error =>  this.errorMessage = <any>error);
  }

 }

 export class News {
  message: string;
  picture: string;
  full_picture: string;
  name: string;
  type: string;
  link: string;
  url: SafeResourceUrl;
}
