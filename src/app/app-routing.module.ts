import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiSourcesComponent } from './api-sources/api-sources.component';
import { EveryNewsComponent } from './every-news/every-news.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

const routes: Routes = [
  { path: 'sources', component: ApiSourcesComponent },
  { path: 'top-headlines', component: TopHeadlinesComponent },
  { path: 'every-news', component: EveryNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }