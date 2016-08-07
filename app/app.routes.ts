import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { NewsComponent } from './content/news/news.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { CalendarComponent } from './content/calendar/calendar.component';

const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'calendar', component: CalendarComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
