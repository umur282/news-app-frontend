import { ApiResponseModel } from './api-response.model';

export interface ApiSourcesModel extends ApiResponseModel {
  sources: ApiSourceModel[];
}

export interface ApiSourceModel {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}