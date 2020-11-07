import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiResponseModel } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  apiUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getApiResponse(apiName: string) {
    const apiUrl = this.apiUrl + apiName;
    return this.http.get<ApiResponseModel>(apiUrl);
  }

}
