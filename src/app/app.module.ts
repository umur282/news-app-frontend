import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiSourcesComponent } from './api-sources/api-sources.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseDirective } from './collapse.directive';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { EveryNewsComponent } from './every-news/every-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiSourcesComponent,
    NavbarComponent,
    CollapseDirective,
    TopHeadlinesComponent,
    EveryNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
