import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  imports: [FormsModule, InputMaskModule],
  selector: 'app-template-form',
  templateUrl: './template-form.html',
})
export class TemplateForm {
  username = '';
  phone = '';
  birthdate = '';
  password = '';


  submitForm() {
    console.log('Form submitted'); // Verify in inspect console
    console.log(this.username, this.password);
  }
}
