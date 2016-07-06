import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'lib-app',
  template: `
  <lib-header></lib-header>
  <lib-nav></lib-nav>
  <lib-content></lib-content>
  <lib-footer></lib-footer>
`,
  directives:[HeaderComponent, NavComponent, ContentComponent, FooterComponent]
})
export class AppComponent { }
