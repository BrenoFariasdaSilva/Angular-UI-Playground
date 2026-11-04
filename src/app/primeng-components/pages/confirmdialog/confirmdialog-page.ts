import { Component, inject } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-confirmdialog-page',
  imports: [ButtonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './confirmdialog-page.html',
})
export class ConfirmdialogPage {
  private readonly confirmationService = inject(ConfirmationService);

  confirm() {
    this.confirmationService.confirm({
      header: 'Confirm action',
      message: 'Do you want to continue?',
      acceptLabel: 'Continue',
    });
  }
}
