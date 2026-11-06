import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, of } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  selector: 'app-rxjs',
  styleUrl: './rxjs.css',
  templateUrl: './rxjs.html',
})
export class Rxjs {
  users = [
    { id: '1', name: 'Breno Farias', isActive: true},
    { id: '2', name: 'Victor Gerardo', isActive: true},
    { id: '3', name: 'Sergio Juvencio', isActive: true},
  ];

  // $ suffix is a common naming convention for Observables in RxJS.
  users$ = of(this.users); // Source observable: `of()` emits the local users array.

  // RxJS's `pipe(map())` transforms each emitted user list into an array of names.
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  ngOnInit(): void {
    // Not a great ideia to use subscribe. It's best to use async pipe, cause this way, when the object is destroyed, you don't have hanging streams that you forgot to unsub.
    // this.users$.subscribe((users) => {
    //   console.log('users', users);
    // });
  }
}
