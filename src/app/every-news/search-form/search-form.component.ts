import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FetchService } from 'src/app/services/fetch.service';
import { ApiSourceModel } from 'src/app/models/api-sources.model';
import { SearchDataModel } from '../../models/search-data.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  sourcesList: ApiSourceModel[];
  @Output('searchData') searchDataEvent: EventEmitter<SearchDataModel> = new EventEmitter<SearchDataModel>();

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getApiSources().then((apiSourceList: ApiSourceModel[]) => {
      this.sourcesList = apiSourceList;
    });
  }

  onSubmit(searchForm: NgForm) {
    const searchData = searchForm.value;
    this.searchDataEvent.emit(searchData);
  }

}
