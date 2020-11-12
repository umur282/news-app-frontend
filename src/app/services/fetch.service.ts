import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponseModel } from '../models/api-response.model';
import { ApiSourceModel, ApiSourcesModel } from '../models/api-sources.model';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  apiUrl: string = 'http://localhost:3000/';
  apiSourceList: ApiSourceModel[];

  constructor(private http: HttpClient) {
    this.getApiSources();
  }

  getApiResponse(apiName: string): Observable<ApiResponseModel> {
    const apiUrl = this.apiUrl + apiName;
    return this.http.get<ApiResponseModel>(apiUrl);
  }

  getApiSources(): Promise<ApiSourceModel[]> {
    return this.getApiResponse('sources').pipe(
      map((data: ApiSourcesModel) => {
        if (data.status === 'ok') {
          this.apiSourceList = data.sources;
        }
        return this.apiSourceList;
      })
    ).toPromise();
  }

}
