import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'lib-language',
  templateUrl: './app/footer/language/language.component.html',
  styleUrls:  ['./app/footer/language/language.component.css'],
  pipes: [TranslatePipe],
})
export class LanguageComponent {

 }
