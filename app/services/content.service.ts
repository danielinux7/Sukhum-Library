import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ContentService {
  constructor (private http: Http) {}
  private contentUrl = 'https://sukhum-library.firebaseio.com/';  // URL to web API

  getContent (name: string): Observable<any> {
    return this.http.get(this.contentUrl+name+'.json')
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || "<div class='alert alert-warning' role='alert'>This page is currently not available in this language. Help us translate this page</div>";
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
