import { Component, OnInit } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { ContentService } from './../../services/content.service'

@Component({
  selector: 'lib-contacts',
  templateUrl: './app/content/contacts/contacts.component.html',
  styleUrls:  ['./app/content/contacts/contacts.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class ContactsComponent implements OnInit{
  errorMessage: string;
  html: string;

  constructor(private translate: TranslateService,private content:ContentService) {

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getContent('contacts_'+this.translate.currentLang);
    });
  }
  
  ngOnInit (){
    this.getContent('contacts_'+this.translate.currentLang);
  }

  getContent(name:string) {
     this.content.getContent(name)
                     .subscribe(
                       currentcontent => this.html = currentcontent ,
                       error =>  this.errorMessage = <any>error);
  }

}
