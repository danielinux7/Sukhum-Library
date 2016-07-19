import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
import { LanguageComponent } from './language/language.component';

@Component({
  selector: 'lib-footer',
  templateUrl: './app/footer/footer.component.html',
  styleUrls:  ['./app/footer/footer.component.css'],
  pipes: [TranslatePipe],
  directives: [LanguageComponent]
})
export class FooterComponent {

 }
