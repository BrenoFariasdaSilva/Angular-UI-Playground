// TypeScript route table mapping URL paths to page components.
import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Login } from './login/login';
import { miscRoutes } from './misc/misc.routes';
import { NextPage } from './next-page/next-page';
import { pipeRoutes } from './pipes/pipes.routes';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateForm } from './template-form/template-form';
import { primengComponentRoutes } from './primeng-components/primeng-components.routes';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'home', component: HomePage, pathMatch: 'full' },
  { path: 'next-page', component: NextPage, pathMatch: 'full' },
  {
    path: 'dialog',
    loadComponent: () => import('./dialog/dialog').then((m) => m.Dialog),
    pathMatch: 'full',
  },
  ...miscRoutes,
  ...pipeRoutes,
  { path: 'reactive-form', component: ReactiveForm, pathMatch: 'full' },
  { path: 'template-form', component: TemplateForm, pathMatch: 'full' },
  ...primengComponentRoutes,
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
