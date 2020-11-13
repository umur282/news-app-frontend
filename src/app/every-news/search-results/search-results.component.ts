import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { FetchService } from '../../services/fetch.service';
import { ArticleModel, ArticlesModel } from '../../models/articles.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  articleList: ArticleModel[];
  @Input() searchUrl: Subject<string>;
  searchDataSubs: Subscription;

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.searchDataSubs = this.searchUrl.subscribe((searchUrl: string) => {
      console.log(searchUrl);
      this.fetchService.getApiResponse(searchUrl)
      .subscribe((data: ArticlesModel) => {
        console.log(data);
        if (data.status === 'ok') {
          this.articleList = data.articles;
        } else if (data.status === 'error') {
          console.log(data.code + ': ' + data.message);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.searchDataSubs.unsubscribe();
  }

}
