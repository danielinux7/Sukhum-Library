import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from 'ng2-translate/ng2-translate';
declare var $:any;
@Component({
  selector: 'lib-language',
  templateUrl: './app/footer/language/language.component.html',
  styleUrls:  ['./app/footer/language/language.component.css'],
  pipes: [TranslatePipe],
})
export class LanguageComponent {
  selectLang(event) {
    $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class','active');
    $(event.target).closest('li').addClass('active');
  }
 }
