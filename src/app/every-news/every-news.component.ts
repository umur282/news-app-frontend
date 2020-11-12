import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { SearchDataModel } from '../models/search-data.model';

@Component({
  selector: 'app-every-news',
  templateUrl: './every-news.component.html'
})
export class EveryNewsComponent {

  searchDataSubject: Subject<SearchDataModel> = new Subject<SearchDataModel>();

  onEmittedSearchData(event: SearchDataModel) {
    this.searchDataSubject.next(event);
  }

}
