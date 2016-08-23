import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class NewsService {
  constructor (private http: Http) {}
  private newsUrl = ' https://graph.facebook.com/v2.7/631241557059261/posts?fields=id%2Cpicture%2Cname%2Ctype%2Cmessage%2Clink%2Cfull_picture&access_token=EAAHcjSmts5ABAFh1FBMh1VaKY7HWg5HqrSMqda11kkXK10avaxZBHmX6z9F6ctcMNz2TimQZB70zZBWiyqHsZABdwhaCpPaEZCIOZBbBTeEm33u6bZBGZCpXzu41MsDbz20ta4JpLSgusGmLSnojGLW4kh6xGdZAHZCksZD&locale=';  // URL to web API
  getNews (lang: string): Observable<any> {
    return this.http.get(this.newsUrl + lang)
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
