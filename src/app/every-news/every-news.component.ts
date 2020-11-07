import { Component, OnInit } from '@angular/core';
import { ArticleModel, ArticlesModel } from '../models/articles.model';

import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-every-news',
  templateUrl: './every-news.component.html'
})
export class EveryNewsComponent implements OnInit {

  articleList: ArticleModel[]

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getApiResponse('every-news').subscribe((data: ArticlesModel) => {
      if (data.status === "ok") {
        this.articleList = data.articles;
        console.log(data);
      }
    });
  }

}
