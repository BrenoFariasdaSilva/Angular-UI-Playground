import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  imports: [FormsModule, InputMaskModule],
  selector: 'app-template-form',
  styleUrl: './template-form.css',
  templateUrl: './template-form.html',
})
export class TemplateForm {
  username: string = '';
  phone: string = '';
  birthdate: string = '';
  password: string = '';


  submitForm(event: Event) {
    event.preventDefault();

    console.log('Form submitted'); // Verify in inspect console
    console.log(this.username, this.password);
  }
}
