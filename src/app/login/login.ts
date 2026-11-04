import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthSessionService } from '../auth/auth-session.service';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly authSession = inject(AuthSessionService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  email = '';
  password = '';
  loginError = '';

  handleSubmit(): void {
    this.loginError = '';

    if (this.validateLogin()) {
      this.authSession.authorize();
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      const destination = returnUrl?.startsWith('/') && !returnUrl.startsWith('//') ? returnUrl : '/home';
      this.router.navigateByUrl(destination);
    } else {
      this.loginError = 'Invalid email or password.';
    }
  }

  validateLogin(): boolean {
    return this.email.trim() !== '' && this.email === this.password;
  }
}
