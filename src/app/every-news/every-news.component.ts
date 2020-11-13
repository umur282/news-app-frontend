import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-every-news',
  templateUrl: './every-news.component.html'
})
export class EveryNewsComponent {

  searchUrlSubject: Subject<string> = new Subject<string>();

  onEmittedSearchUrl(event: string) {
    this.searchUrlSubject.next(event);
  }

}
