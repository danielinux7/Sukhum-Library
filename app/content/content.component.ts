import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'lib-content',
  templateUrl: './app/content/content.component.html',
  styleUrls:  ['./app/content/content.component.css'],
  directives:[HomeComponent, NewsComponent, ContactsComponent]
})
export class ContentComponent { }
