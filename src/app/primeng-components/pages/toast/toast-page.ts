import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast-page',
  imports: [ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './toast-page.html',
})
export class ToastPage {
  private readonly messageService = inject(MessageService);

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Changes saved',
      detail: 'Your preferences have been updated.',
    });
  }
}
