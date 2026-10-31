import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  imports: [ReactiveFormsModule, InputMaskModule],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    phone: new FormControl(''),
    birthdate: new FormControl(''),
    password: new FormControl('')
  });

  submitForm(event: Event) {
    event.preventDefault();

    console.log('Form submitted'); // Verify in inspect console
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }
}
