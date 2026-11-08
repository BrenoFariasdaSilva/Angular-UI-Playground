// TypeScript logic for a button component that notifies its parent when clicked.
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification-button-click',
  styleUrl: './notification-button-click.css',
  templateUrl: './notification-button-click.html',
})
export class NotificationButtonClick {
  @Input() text = 'Click me';
  @Output() buttonClicked = new EventEmitter<string>();

  onButtonClick(): void {
    this.buttonClicked.emit('click');
  }
}
