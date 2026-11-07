import { Component, signal } from '@angular/core';
import { NotificationButtonClick } from '../../notification-button-click/notification-button-click';
@Component({
  selector: 'app-events-page',
  imports: [NotificationButtonClick],
  template: `<section class="concept-page">
    <h2>Component events</h2>
    <p><code>(buttonClicked)="notify()"</code> listens to the child component output.</p>
    <app-notification-button-click text="Send notification" (buttonClicked)="notify()" />
    @if (message()) {
      <p class="demo-result" role="status">{{ message() }}</p>
    }
  </section>`,
})
export class EventsPage {
  readonly message = signal('');
  notify() {
    this.message.set('Notification received from the child component.');
  }
}
