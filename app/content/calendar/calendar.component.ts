import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'lib-calendar',
  templateUrl: './app/content/calendar/calendar.component.html',
  styleUrls:  ['./app/content/calendar/calendar.component.css']
})
export class CalendarComponent implements OnInit{

  ngOnInit (){
    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })
  }
  
}
