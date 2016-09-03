import { Component, OnInit } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, TranslatePipe, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import { NewsService } from './../../services/news.service';
declare var $:any;

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

// Less/more functionality for panels
  togglePanel(event:any) {
    if (event.target.className.match('hidden-xxs')) {
      event.target.isDisabled = false;
      if (!event.target.isDisabled) {
        if (!event.target.isOn && event.target.className.match('.more')) {
          $(event.target).closest('.panel').addClass('open');
          $(event.target).closest('.panel-video').find('.video-container').addClass('open-video');
          $(event.target).closest('.panel-footer').addClass('no-bg');
          $(event.target).addClass('hide');
          $(event.target).next().removeClass('hide');
          event.target.isOn = true;
        }
        else {
          $(event.target).closest('.panel').removeClass('open');
          $(event.target).closest('.panel-video').find('.video-container').removeClass('open-video');
          $(event.target).closest('.panel-footer').removeClass('no-bg');
          $(event.target).prev().removeClass('hide');
          $(event.target).addClass('hide');
          $(event.target).prev()[0].isOn = false;
        }
      }
    }
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
  created_time: string;
  url: SafeResourceUrl;
}
