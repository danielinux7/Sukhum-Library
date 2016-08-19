import { Component } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'lib-contacts',
  templateUrl: './app/content/contacts/contacts.component.html',
  styleUrls:  ['./app/content/contacts/contacts.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class ContactsComponent {
  html_template = `./app/content/contacts/contacts_`;
  html: string;

  constructor(translate: TranslateService) {
        this.html = this.html_template + translate.currentLang;

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
          this.html = this.html_template + translate.currentLang;
    });
  }

}
