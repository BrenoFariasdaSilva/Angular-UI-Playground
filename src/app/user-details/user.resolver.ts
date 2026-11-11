import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { UserDirectoryService, UserProfile } from './user-directory.service';

export const userResolver: ResolveFn<UserProfile> = (route) => {
  const user = inject(UserDirectoryService).getUser(route.paramMap.get('id'));

  return user ?? new RedirectCommand(inject(Router).parseUrl('/home'));
};
