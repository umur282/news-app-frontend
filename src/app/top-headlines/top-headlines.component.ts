import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';

import { ArticlesModel, ArticleModel } from '../models/articles.model';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html'
})
export class TopHeadlinesComponent implements OnInit {

  articleList: ArticleModel[];

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getApiResponse('top-headlines').subscribe((data: ArticlesModel) => {
      if (data.status === 'ok'){
        this.articleList = data.articles;
      }
    });
  }

}