import { Component, OnInit } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { ContentService } from './../../services/content.service'

@Component({
  selector: 'lib-home',
  templateUrl: './app/content/home/home.component.html',
  styleUrls:  ['./app/content/home/home.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class HomeComponent implements OnInit{
  errorMessage: string;
  html: string;

  constructor(private translate: TranslateService,private content:ContentService) {

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getContent('home_'+this.translate.currentLang);
    });
  }

  ngOnInit (){
    this.getContent('home_'+this.translate.currentLang);
  }

  getContent(name:string) {
     this.content.getContent(name)
                     .subscribe(
                       currentcontent => this.html = currentcontent ,
                       error =>  this.errorMessage = <any>error);
  }

}
