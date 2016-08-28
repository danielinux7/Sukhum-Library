import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { NewsComponent } from './content/news/news.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { CalendarComponent } from './content/calendar/calendar.component';
import { SearchComponent } from './content/search/search.component';
import { ProfileComponent } from './content/user/profile/profile.component';

const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
