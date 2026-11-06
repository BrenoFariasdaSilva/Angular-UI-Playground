import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  styleUrl: './rxjs-page.css',
  template: `<section class="rxjs-page">
    <h2>Source observable: users</h2>
    <p>
      <code>of()</code> creates an observable that emits the value supplied to it and then
      completes.
    </p>
    <p>
      <code>users$</code> passes the local users array to <code>of()</code> to create the source
      stream.
    </p>
    <ul>
      @for (user of users$ | async; track user.id) {
        <li>
          <span>{{ user.name }}</span>
          <span>{{ user.isActive ? 'Active' : 'Inactive' }}</span>
        </li>
      }
    </ul>
  </section>`,
})
export class SourcePage {
  readonly users$ = of([
    { id: '1', name: 'Breno Farias', isActive: true },
    { id: '2', name: 'Victor Gerardo', isActive: true },
    { id: '3', name: 'Sergio Juvencio', isActive: false },
  ]);
}
