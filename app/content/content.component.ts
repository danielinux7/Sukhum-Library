import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'lib-content',
  templateUrl: './app/content/content.component.html',
  styleUrls:  ['./app/content/content.component.css'],
  directives:[ROUTER_DIRECTIVES, HomeComponent, NewsComponent, ContactsComponent, CalendarComponent, SearchComponent]
})
export class ContentComponent { }
