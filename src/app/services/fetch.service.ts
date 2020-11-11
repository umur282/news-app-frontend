import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiResponseModel } from '../models/api-response.model';
import { ApiSourceModel, ApiSourcesModel } from '../models/api-sources.model';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  apiUrl = 'http://localhost:3000/';
  apiSourcesList: ApiSourceModel[];

  constructor(private http: HttpClient) { }

  getApiResponse(apiName: string) {
    const apiUrl = this.apiUrl + apiName;
    return this.http.get<ApiResponseModel>(apiUrl);
  }

  getApiSources(): ApiSourceModel[] {
    this.getApiResponse('sources').subscribe((data: ApiSourcesModel) => {
      if (data.status === 'ok') {
        this.apiSourcesList = data.sources;
      }
    });
    return this.apiSourcesList;
  }

}
