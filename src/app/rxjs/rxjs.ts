import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { of } from 'rxjs';

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

  users$ = of(this.users); // 'of' converts plain-data into a stream;

  ngOnInit(): void {
    // Not a great ideia to use subscribe. It's best to use async pipe, cause this way, when the object is destroyed, you don't have hanging streams that you forgot to unsub.
    // this.users$.subscribe((users) => {
    //   console.log('users', users);
    // });
  }
}
