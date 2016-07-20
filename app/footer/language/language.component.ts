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
  lang = 'Russian';
  code = 'ru';
  // selectedCode = '';
  selectLang(event) {
    $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class','active');
    $(event.target).closest('li').addClass('active');    
    $(event.target).closest('a');
    // debugger;
    var selectedCode = '';
    selectedCode = $(event.target).closest('a').attr('id');
    if (selectedCode !== this.code) {
        if (selectedCode === 'en') {
            this.lang = 'English';
            this.code = selectedCode;
        }
        if (selectedCode === 'ru') {
            this.lang = 'Russian';
            this.code = selectedCode;
        }
        if (selectedCode === 'ab') {
            this.lang = 'Abkhaz';
            this.code = selectedCode;
        }
        if (selectedCode === 'tr') {
            this.lang = 'Turkish';
            this.code = selectedCode;
        }
        if (selectedCode === 'ar') {
            this.lang = 'Arabic';
            this.code = selectedCode;
        }
    }
  }
 }
