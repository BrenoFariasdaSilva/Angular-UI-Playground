import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthSessionService {
  private readonly storageKey = 'angular-ui-playground.authorized';
  readonly isAuthorized = signal(this.readAuthorization());

  authorize(): void {
    window.sessionStorage.setItem(this.storageKey, 'true');
    this.isAuthorized.set(true);
  }

  private readAuthorization(): boolean {
    return typeof window !== 'undefined' && window.sessionStorage.getItem(this.storageKey) === 'true';
  }
}
