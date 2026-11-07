import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  imports: [ReactiveFormsModule, InputMaskModule],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]),
    birthdate: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  submitForm() {
    console.log('Form submitted'); // Verify in inspect console
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }
}
