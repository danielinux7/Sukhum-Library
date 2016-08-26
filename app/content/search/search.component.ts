import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { SearchService } from './../../services/search.service';
declare var $:any;

@Component({
  selector: 'lib-search',
  templateUrl: './app/content/search/search.component.html',
  styleUrls:  ['./app/content/search/search.component.css'],
  pipes: [TranslatePipe]
})
export class SearchComponent implements OnInit{
  errorMessage: string;
  searchResult: {};
  constructor(private translate: TranslateService, private searchService: SearchService ) {}

  ngOnInit (){

  }

  getSearch(keyword:string) {
     this.searchService.getSearch(keyword)
                     .subscribe(
                       result => this.searchResult = result ,
                       error =>  this.errorMessage = <any>error);
  }

}
