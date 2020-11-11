import { Component, OnInit } from '@angular/core';
import { ArticleModel, ArticlesModel } from '../../models/articles.model';

import { FetchService } from '../../services/fetch.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {

  articleList: ArticleModel[]

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getApiResponse('every-news?q=italy').subscribe((data: ArticlesModel) => {
      if (data.status === "ok") {
        this.articleList = data.articles;
        console.log(data);
      }
    });
  }

}
