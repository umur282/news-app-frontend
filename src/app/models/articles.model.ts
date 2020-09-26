import { ApiResponseModel } from './api-response.model';

export interface ArticlesModel extends ApiResponseModel {
  articles: ArticleModel[];
  totalResults: number;
}

export interface ArticleModel {
  author: string;
  content: string;
  description: string;
  pulishedAt: string;
  source: {
    id: string,
    name: string
  };
  title: string;
  url: string;
  urlToImage: string;
}