import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiSourcesComponent } from './api-sources/api-sources.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseDirective } from './collapse.directive';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { EveryNewsComponent } from './every-news/every-news.component';
import { SearchResultsComponent } from './every-news/search-results/search-results.component';
import { SearchFormComponent } from './every-news/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiSourcesComponent,
    NavbarComponent,
    CollapseDirective,
    TopHeadlinesComponent,
    EveryNewsComponent,
    SearchResultsComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
