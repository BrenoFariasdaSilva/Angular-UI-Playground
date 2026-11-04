import { Component, signal } from '@angular/core';
import { NotificationButtonClick } from '../../notification-button-click/notification-button-click';
@Component({
  selector: 'app-events-page',
  imports: [NotificationButtonClick],
  template: `<section>
    <h2>Component events</h2>
    <app-notification-button-click text="Send notification" (buttonClicked)="message.set($event)" />
    <p>{{ message() }}</p>
  </section>`,
})
export class EventsPage {
  readonly message = signal('');
}
