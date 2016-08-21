import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { EventService } from './../../services/event.service'
declare var $:any;

@Component({
  selector: 'lib-calendar',
  templateUrl: './app/content/calendar/calendar.component.html',
  styleUrls:  ['./app/content/calendar/calendar.component.css'],
  pipes: [TranslatePipe]
})
export class CalendarComponent implements OnInit{
  errorMessage: string;
  currentEvent = {start:'', end:''};
  googleCalendarId = {'en':'7u7pemcf1h7ccostavq7h5vpqs',
                      'ru':'popf6dff8ve62nrc18aunt4nsc',
                      'ab':'popf6dff8ve62nrc18aunt4nsc',
                      'tr':'8d4ht4sq2igbqe1cm6p8acg83s',
                      'ar':'no9scgj1ocfcb4dq0bs4s4etac',
                      'extension':'@group.calendar.google.com'
                     };

  constructor(private translate: TranslateService, private eventService: EventService ) {}

  ngOnInit (){
    $('#calendar').fullCalendar({
        lang: this.translate.currentLang,
        googleCalendarApiKey: 'AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4',
        events: {
            googleCalendarId: this.googleCalendarId[this.translate.currentLang]+this.googleCalendarId['extension']
        },
        eventClick: (calEvent, jsEvent, view) => {
          this.getEvent(calEvent.id.split('_')[0],this.googleCalendarId[this.translate.currentLang]+this.googleCalendarId['extension']);
          $('.alert-info').removeClass('hide-sm');
          return false;
        }
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      $('#calendar').fullCalendar( 'destroy' );
      $('#calendar').fullCalendar({
          lang: this.translate.currentLang,
          googleCalendarApiKey: 'AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4',
          events: {
              googleCalendarId: this.googleCalendarId[this.translate.currentLang]+this.googleCalendarId['extension']
          },
          eventClick: (calEvent, jsEvent, view) => {
            this.getEvent(calEvent.id.split('_')[0],this.googleCalendarId[this.translate.currentLang]+this.googleCalendarId['extension']);
            $('.alert-info').removeClass('hide-sm');
            return false;
          }
      });

    });

  }

  getEvent(id:string, gID:string) {
     this.eventService.getEvent(id, gID)
                     .subscribe(
                       currentEvent => this.currentEvent = currentEvent ,
                       error =>  this.errorMessage = <any>error);
  }

// To hide/show in mobile view
  onSelect(event) {
    $(event.target).closest('.alert-info').addClass('hide-sm');
  }

}
