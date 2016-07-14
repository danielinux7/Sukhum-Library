import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'lib-app',
  templateUrl: './app/app.component.html',
  styleUrls:  ['./app/app.component.css'],
  directives:[HeaderComponent, NavComponent, ContentComponent, FooterComponent]
})
export class AppComponent { }
