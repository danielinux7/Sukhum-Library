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
        lang: this.lang,
        googleCalendarApiKey: 'AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4',
        events: {
            googleCalendarId: 'popf6dff8ve62nrc18aunt4nsc@group.calendar.google.com'
        }
    });
  }

  constructor(translate: TranslateService) {
    this.lang =  translate.currentLang;

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      $('#calendar').fullCalendar( 'destroy' );
      $('#calendar').fullCalendar({
          lang: this.lang,
          googleCalendarApiKey: 'AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4',
          events: {
              googleCalendarId: 'popf6dff8ve62nrc18aunt4nsc@group.calendar.google.com'
          }
      });

    });
  }

}
