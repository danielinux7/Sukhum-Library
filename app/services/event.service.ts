import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EventService {
  constructor (private http: Http) {}
  private eventsUrl = 'https://www.googleapis.com/calendar/v3/calendars/popf6dff8ve62nrc18aunt4nsc@group.calendar.google.com/events?key=AIzaSyCFf8H7WgYP6W3NPI8z0xRw9N0VAel4Ha4';  // URL to web API
  getEvents (): Observable<any> {
    return this.http.get(this.eventsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.items || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}