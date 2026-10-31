
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private router = inject(Router); // Dependency injection of the Router class.

  email = '';
  password = '';
  loginError = '';

  handleSubmit(): void {
    this.loginError = '';

    if (this.validateLogin()) {
      this.router.navigate(['/home']);
    } else {
      this.loginError = 'Invalid email or password.';
    }
  }

  validateLogin(): boolean {
    return this.email.trim() !== '' && this.email === this.password;
  }
}
