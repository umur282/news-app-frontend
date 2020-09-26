import { Component, OnInit } from '@angular/core';

import { FetchService } from '../services/fetch.service';
import { ApiSourcesModel, ApiSourceModel } from '../models/api-sources.model';

@Component({
  selector: 'app-api-sources',
  templateUrl: './api-sources.component.html'
})
export class ApiSourcesComponent implements OnInit {

  sourcesList: ApiSourceModel[];

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getApiResponse('sources').subscribe((data: ApiSourcesModel) => {
      if (data.status === 'ok') {
        this.sourcesList = data.sources;
      }
    });
  }

}
