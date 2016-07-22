import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from 'ng2-translate/ng2-translate';
declare var $:any;
@Component({
  selector: 'lib-language',
  templateUrl: './app/footer/language/language.component.html',
  styleUrls:  ['./app/footer/language/language.component.css'],
  pipes: [TranslatePipe],
})
export class LanguageComponent implements OnInit{
  lang = '';
  code = '';
  ngOnInit() {
    $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class','active');
    $('#'+this.code).closest('li').addClass('active');
  }
  constructor(private translate: TranslateService) {
        this.translate = translate;
        var selectedCode = translate.currentLang;
        if (selectedCode === 'en') {
            this.lang = 'english';
            this.code = selectedCode;
        }
        else if (selectedCode === 'ru') {
            this.lang = 'russian';
            this.code = selectedCode;
        }
        else if (selectedCode === 'ab') {
            this.lang = 'abkhaz';
            this.code = selectedCode;
        }
        else if (selectedCode === 'tr') {
            this.lang = 'turkish';
            this.code = selectedCode;
        }
        else if (selectedCode === 'ar') {
            this.lang = 'arabic';
            this.code = selectedCode;
        }
 }
  selectLang(event) {
    $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class','active');
    $(event.target).closest('li').addClass('active');
    $(event.target).closest('a');
    var selectedCode = '';
    selectedCode = $(event.target).closest('a').attr('id');
    if (selectedCode !== this.code) {
        if (selectedCode === 'en') {
            this.lang = 'english';
            this.code = selectedCode;
            this.setLTR();
        }
        if (selectedCode === 'ru') {
            this.lang = 'russian';
            this.code = selectedCode;
            this.setLTR();
        }
        if (selectedCode === 'ab') {
            this.lang = 'abkhaz';
            this.code = selectedCode;
            this.setLTR();
        }
        if (selectedCode === 'tr') {
            this.lang = 'turkish';
            this.code = selectedCode;
            this.setLTR();
        }
        if (selectedCode === 'ar') {
            this.lang = 'arabic';
            this.code = selectedCode;
            this.setRTL();
        }
    }
    this.translate.resetLang(this.code);
    this.translate.use(this.code);
  }

  setRTL(){
    $('lib-content') !== undefined && $('lib-content').addClass('rtl-dir');
    $('.app-rtl') !== undefined && $('.app-rtl').addClass('rtl-rotate');
    $('.app-rtl .search') !== undefined && $('.app-rtl .search').addClass('rtl-dir');
  }

  setLTR(){
    $('lib-content') !== undefined && $('lib-content').removeClass('rtl-dir');
    $('.app-rtl') !== undefined && $('.app-rtl').removeClass('rtl-rotate');
    $('.app-rtl .search') !== undefined && $('.app-rtl .search').removeClass('rtl-dir');
  }

 }
