import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';
declare var $:any;

@Component({
  selector: 'lib-calendar',
  templateUrl: './app/content/calendar/calendar.component.html',
  styleUrls:  ['./app/content/calendar/calendar.component.css']
})
export class CalendarComponent implements OnInit{
  lang: string;

  ngOnInit (){
    $('#calendar').fullCalendar({
        // put your options and callbacks here
        lang: this.lang
    })
  }

  constructor(translate: TranslateService) {
    this.lang =  translate.currentLang;

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      $('#calendar').fullCalendar( 'destroy' );
      $('#calendar').fullCalendar({
          // put your options and callbacks here
          lang: translate.currentLang
      })

    });
  }

}
