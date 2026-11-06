import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-rxjs',
  styleUrl: './rxjs.css',
  templateUrl: './rxjs.html',
})
export class Rxjs {
  readonly navigation = [
    { label: 'Source', path: 'source' },
    { label: 'Map', path: 'map' },
    { label: 'Filter', path: 'filter' },
    { label: 'BehaviorSubject', path: 'behavior-subject' },
    { label: 'fromEvent', path: 'from-event' },
    { label: 'combineLatest', path: 'combine-latest' },
  ];
}
