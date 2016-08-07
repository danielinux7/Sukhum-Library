import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
@Component({
  selector: 'lib-content',
  templateUrl: './src/app/content/content.component.html',
  styleUrls:  ['./src/app/content/content.component.css'],
  directives:[ROUTER_DIRECTIVES, HomeComponent, NewsComponent, ContactsComponent]
})
export class ContentComponent { }
