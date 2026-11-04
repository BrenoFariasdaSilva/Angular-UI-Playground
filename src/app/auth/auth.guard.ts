import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthSessionService } from './auth-session.service';

export const authGuard: CanActivateFn = (_route, state) => {
  const authSession = inject(AuthSessionService);
  const router = inject(Router);

  if (authSession.isAuthorized()) {
    return true;
  }

  return router.createUrlTree(['/'], { queryParams: { returnUrl: state.url } });
};
