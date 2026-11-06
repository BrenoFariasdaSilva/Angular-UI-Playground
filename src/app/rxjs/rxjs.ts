import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, filter, map, of } from 'rxjs';

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
    { id: '3', name: 'Sergio Juvencio', isActive: false},
  ];

  // $ suffix is a common naming convention for Observables in RxJS.
  users$ = of(this.users); // Source observable: `of()` emits the local users array.

  // RxJS's `pipe(map())` transforms each emitted user list into an array of names.
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  // RxJS's `pipe(filter())` accepts or rejects each emitted user array based on the condition.
  // It accepts a map after filter, for when condition is true.
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
  ); // The condition is true, when all users are active, and therefore it shows them, otherwise if one of them aint active,
  // the condition would be false and it would show no users at all.


  // Create a new BehaviorSubject, which initially is empty/null, but can be filled and updated/subscribed later.
  user$ = new BehaviorSubject<{ id:string; name: string } | null>(null);

  ngOnInit(): void {
    // After two seconds, `next()` replaces the initial `null` value and notifies all subscribers!
    setTimeout(() => {
      this.user$.next({ id: '1', name: 'John'});
    }, 5000);

    // Not a great ideia to use subscribe. It's best to use async pipe, cause this way, when the object is destroyed, you don't have hanging streams that you forgot to unsub.
    // this.users$.subscribe((users) => {
    //   console.log('users', users);
    // });
  }
}
