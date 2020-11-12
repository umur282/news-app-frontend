import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { FetchService } from '../../services/fetch.service';
import { ArticleModel, ArticlesModel } from '../../models/articles.model';
import { SearchDataModel } from 'src/app/models/search-data.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  articleList: ArticleModel[];
  @Input() searchData: Subject<SearchDataModel>;
  searchDataSubs: Subscription;

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.searchDataSubs = this.searchData.subscribe((searchData) => {
      let searchUrl: string = 'every-news'
      if (searchData.searchContent === '') searchUrl += '?q=' + searchData.searchContent;

      this.fetchService.getApiResponse(searchUrl)
      .subscribe((data: ArticlesModel) => {
        if (data.status === "ok") {
          this.articleList = data.articles;
        }
      });
      console.log(searchData);
    });
  }

  ngOnDestroy(): void {
    this.searchDataSubs.unsubscribe();
  }

}
