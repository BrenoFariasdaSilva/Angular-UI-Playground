import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  styleUrl: './rxjs-page.css',
  template: `<section class="rxjs-page">
    <h2>Derived observable: usernames</h2>
    <p><code>map()</code> transforms each emitted value into a new value.</p>
    <p>
      <code>usernames$</code> uses <code>pipe(map())</code> to transform <code>users$</code> into a
      stream of names.
    </p>
    <ul>
      @for (username of usernames$ | async; track username) {
        <li>
          <span>{{ username }}</span>
        </li>
      }
    </ul>
  </section>`,
})
export class MapPage {
  readonly users$ = of([
    { id: '1', name: 'Breno Farias' },
    { id: '2', name: 'Victor Gerardo' },
    { id: '3', name: 'Sergio Juvencio' },
  ]);
  readonly usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));
}
