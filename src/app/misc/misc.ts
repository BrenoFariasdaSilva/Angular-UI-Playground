import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationButtonClick } from '../notification-button-click/notification-button-click';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, NotificationButtonClick, RouterLink],
  selector: 'app-misc',
  styleUrl: './misc.css',
  templateUrl: './misc.html',
})
export class Misc {
  protected readonly title = signal('interview-angular');
  protected readonly new_title = 'myApp2';
  inputType = 'text';

  notify(text: string) {
    alert(`Hello ${text}`);
  }

  firstNumber: number = 2;
  secondNumber: number = 3;

  data = [
    { name: 'Sergio Juvencio', position: 'SmartIdealWorld - CEO' },
    { name: 'Victor Gerardo', position: 'SmartIdealWorld - CTO' },
    { name: 'Govin Raju', position: 'SmartIdealWorld - COO' },
    { name: 'Breno Farias', position: 'SmartIdealWorld - Software Developer' },
  ];

  notifyButton(value: string): void {
    alert(value);
  }
}
