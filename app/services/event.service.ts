import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EventService {
  constructor (private http: Http) {}
  private eventsUrl = 'https://graph.facebook.com/v2.7/631241557059261/events?access_token=EAACEdEose0cBAEKnwZCw6bdNMMhtLZAKD4mMd4LmKEqZAZCdHyydDOKZBSZAbQkoT7olnK0xb3reUJpzZA2Hv6jCU4MpwZAZApFIhFnZCoMhhrT0K9KVouSCWEZCu8un8RH0vuqtTuZB0EECuaoiZCeGVfZBZABvyZAA0tjkilQCotXAdeqpeAZDZD';  // URL to web API
  getEvents (): Observable<any> {
    return this.http.get(this.eventsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
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
