import { Component } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'lib-content',
  templateUrl: './app/content/content.component.html',
  styleUrls:  ['./app/content/content.component.css'],
  directives:[NewsComponent, ContactsComponent]
})
export class ContentComponent { }
