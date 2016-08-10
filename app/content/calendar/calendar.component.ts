import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { EventService } from './../../services/event.service'
declare var $:any;

@Component({
  selector: 'lib-calendar',
  templateUrl: './app/content/calendar/calendar.component.html',
  styleUrls:  ['./app/content/calendar/calendar.component.css']
})
export class CalendarComponent implements OnInit{
  lang: string;
  events: any;
  errorMessage: string;
  mode = 'Observable';

  ngOnInit (){
    this.getEvents();

    $('#calendar').fullCalendar({
        lang: this.lang,
        googleCalendarApiKey: 'AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4',
        events: {
            googleCalendarId: 'popf6dff8ve62nrc18aunt4nsc@group.calendar.google.com'
        }
    });
  }

  constructor(translate: TranslateService, private eventService: EventService ) {
    this.lang =  translate.currentLang;

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      $('#calendar').fullCalendar( 'destroy' );
      $('#calendar').fullCalendar({
          lang: translate.currentLang,
          googleCalendarApiKey: 'AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4',
          events: {
              googleCalendarId: 'popf6dff8ve62nrc18aunt4nsc@group.calendar.google.com'
          }
      });

    });
  }

  getEvents() {
     this.eventService.getEvents()
                     .subscribe(
                       events => {this.events = events;console.log(this.events);},
                       error =>  this.errorMessage = <any>error);
  }

}
