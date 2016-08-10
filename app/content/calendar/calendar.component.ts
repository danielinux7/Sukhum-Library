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
  errorMessage: string;
  currentEvent = {start:'', end:''};

  ngOnInit (){
    $('#calendar').fullCalendar({
        lang: this.lang,
        googleCalendarApiKey: 'AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4',
        events: {
            googleCalendarId: 'popf6dff8ve62nrc18aunt4nsc@group.calendar.google.com'
        },
        eventClick: (calEvent, jsEvent, view) => {
          this.getEvent(calEvent.id.split('_')[0]);
          return false;
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
          },
          eventClick: (calEvent, jsEvent, view) => {
            this.getEvent(calEvent.id.split('_')[0]);
            return false;
          }
      });

    });
  }

  getEvent(id:string) {
     this.eventService.getEvent(id)
                     .subscribe(
                       currentEvent => this.currentEvent = currentEvent ,
                       error =>  this.errorMessage = <any>error);
  }

}
