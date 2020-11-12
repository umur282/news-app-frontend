import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiSourceModel } from 'src/app/models/api-sources.model';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent implements OnInit {

  sourcesList: ApiSourceModel[];

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getApiSources().then((apiSourceList: ApiSourceModel[]) => {
      this.sourcesList = apiSourceList;
    });
  }

  onSubmit(searchForm: NgForm) {
    console.log(searchForm);
  }

}
