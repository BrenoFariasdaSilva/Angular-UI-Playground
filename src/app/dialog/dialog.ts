
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';

@Component({
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    LabelModule,
    FormsModule,
  ],
  selector: 'app-dialog',
  styleUrl: './dialog.css',
  templateUrl: './dialog.html',
})
export class Dialog {
  visible = false;

  name = 'Breno Farias';
  email = 'breno@example.com';
  errorMessage = '';

  private savedName = this.name;
  private savedEmail = this.email;

  openDialog(): void {
    this.name = this.savedName;
    this.email = this.savedEmail;
    this.errorMessage = '';
    this.visible = true;
  }

  cancelChanges(): void {
    this.name = this.savedName;
    this.email = this.savedEmail;
    this.errorMessage = '';
    this.visible = false;
  }

  saveChanges(): void {
    const name = this.name.trim();
    const email = this.email.trim();

    if (!name) {
      this.errorMessage = 'Name is required.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.errorMessage = 'Enter a valid email address.';
      return;
    }

    this.savedName = name;
    this.savedEmail = email;

    this.name = name;
    this.email = email;
    this.errorMessage = '';
    this.visible = false;
  }
}
