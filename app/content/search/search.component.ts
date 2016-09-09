import { Component, DoCheck } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './../../services/search.service';
import { Search } from './../../models/search.model';

declare var $:any;

@Component({
  selector: 'lib-search',
  templateUrl: './app/content/search/search.component.html',
  styleUrls:  ['./app/content/search/search.component.css'],
  pipes: [TranslatePipe]
})
export class SearchComponent implements DoCheck{
  errorMessage: string;
  searchResult: any;
  noOfResults: number;
  constructor(private translate: TranslateService, private route: ActivatedRoute, private searchService: SearchService, private model: Search ) {}

  ngDoCheck() {
    if (this.model.type === 'basic') {
      this.getSearch();
      this.model.type = 'none';
    }
  }

  getNext(){
    this.searchService.getNext()
                    .subscribe(
                      collection => { this.searchResult.push.apply(this.searchResult, collection.Results);
                                      this.model.count = collection.Results.length;
                                      this.model.offset += this.model.count;
                                    },
                      error =>  this.errorMessage = <any>error);
  }

  getSearch() {
     this.searchService.getSearch()
                     .subscribe(
                       collection => { this.searchResult = collection.Results;
                                       this.model.count = collection.Results.length;
                                       this.model.offset += this.model.count;
                                       this.noOfResults = collection.NoOfResults;
                                     },
                       error =>  this.errorMessage = <any>error);
  }

}
