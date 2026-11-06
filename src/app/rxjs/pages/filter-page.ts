import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  styleUrl: './rxjs-page.css',
  template: `<section class="rxjs-page">
    <h2>Filtered observable: active users</h2>
    <p><code>filter()</code> emits a value only when its predicate returns <code>true</code>.</p>
    <p><code>filteredUsers$</code> emits the users array only when every user is active.</p>
    @if (filteredUsers$ | async; as users) {
      <ul>
        @for (user of users; track user.id) {
          <li>
            <span>{{ user.name }}</span>
            <span>Active</span>
          </li>
        }
      </ul>
    } @else {
      <p>No users are emitted because one user is inactive.</p>
    }
  </section>`,
})
export class FilterPage {
  readonly users$ = of([
    { id: '1', name: 'Breno Farias', isActive: true },
    { id: '2', name: 'Victor Gerardo', isActive: true },
    { id: '3', name: 'Sergio Juvencio', isActive: false },
  ]);
  readonly filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive)),
  );
}
