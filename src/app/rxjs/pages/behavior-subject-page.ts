import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  styleUrl: './rxjs-page.css',
  template: `<section class="rxjs-page">
    <h2>BehaviorSubject: current user</h2>
    <p>
      <code>BehaviorSubject</code> starts with an initial value and notifies subscribers whenever it
      receives a new value.
    </p>
    <p><code>user$</code> starts as <code>null</code> and emits John after five seconds.</p>
    @if (user$ | async; as user) {
      <p class="current-user">{{ user.name }}</p>
    } @else {
      <p>Waiting for the user...</p>
    }
  </section>`,
})
export class BehaviorSubjectPage implements OnInit {
  readonly user$ = new BehaviorSubject<{ id: string; name: string } | null>(null);

  ngOnInit(): void {
    setTimeout(() => this.user$.next({ id: '1', name: 'John' }), 5000);
  }
}
