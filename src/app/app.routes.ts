// TypeScript route table mapping URL paths to page components.
import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomePage } from './home-page/home-page';
import { Login } from './login/login';
import { miscRoutes } from './misc/misc.routes';
import { NextPage } from './next-page/next-page';
import { pipeRoutes } from './pipes/pipes.routes';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateForm } from './template-form/template-form';
import { TailwindConcepts } from './tailwind-concepts/tailwind-concepts';
import { Responsiveness } from './responsiveness/responsiveness';
import { primengComponentRoutes } from './primeng-components/primeng-components.routes';
import { rxjsRoutes } from './rxjs/rxjs.routes';
import { userResolver } from './user-details/user.resolver';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'home', component: HomePage, canActivate: [authGuard], pathMatch: 'full' },
  { path: 'next-page', component: NextPage, canActivate: [authGuard], pathMatch: 'full' },
  {
    path: 'dialog',
    loadComponent: () => import('./dialog/dialog').then((m) => m.Dialog),
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  ...miscRoutes.map((route) => ({ ...route, canActivate: [authGuard] })),
  ...pipeRoutes.map((route) => ({ ...route, canActivate: [authGuard] })),
  { path: 'reactive-form', component: ReactiveForm, canActivate: [authGuard], pathMatch: 'full' },
  ...rxjsRoutes.map((route) => ({ ...route, canActivate: [authGuard] })),
  { path: 'template-form', component: TemplateForm, canActivate: [authGuard], pathMatch: 'full' },
  {
    path: 'tailwind-concepts',
    component: TailwindConcepts,
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  {
    path: 'responsiveness',
    component: Responsiveness,
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  {
    path: 'themes',
    loadComponent: () => import('./theme-concepts/theme-concepts').then((m) => m.ThemeConcepts),
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  {
    path: 'validators',
    loadComponent: () =>
      import('./validators-concepts/validators-concepts').then((m) => m.ValidatorsConcepts),
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  {
    path: 'remote-data',
    loadComponent: () =>
      import('./remote-data-explorer/remote-data-explorer').then((m) => m.RemoteDataExplorer),
    canActivate: [authGuard],
    pathMatch: 'full',
  },
  {
    path: 'users/:id',
    loadComponent: () => import('./user-details/user-details').then((m) => m.UserDetails),
    canActivate: [authGuard],
    resolve: { user: userResolver },
  },
  ...primengComponentRoutes.map((route) => ({ ...route, canActivate: [authGuard] })),
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
