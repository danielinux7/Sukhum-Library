import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Search } from './../models/search.model';

@Injectable()
export class SearchService {
  constructor (private http: Http, private model: Search) {}
  private searchUrl = 'http://localhost:3000/eusearch?query=';  // URL to web API
  getSearch (): Observable<any> {
    return this.http.get(this.searchUrl + encodeURI(this.model.query))
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getNext (): Observable<any> {
    return this.http.get(this.searchUrl + encodeURI(this.model.query) + "&count="+this.model.count+"&offset="+this.model.offset)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
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
