// TypeScript route table mapping URL paths to page components.
import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Login } from './login/login';
import { Misc } from './misc/misc';
import { NextPage } from './next-page/next-page';
import { Pipes } from './pipes/pipes';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateForm } from './template-form/template-form';
import { Dialog } from './dialog/dialog';
import { primengComponentRoutes } from './primeng-components/primeng-components.routes';

export const routes: Routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'home', component: HomePage, pathMatch: 'full' },
  { path: 'next-page', component: NextPage, pathMatch: 'full' },
  { path: 'dialog', component: Dialog, pathMatch: 'full' },
  { path: 'misc', component: Misc, pathMatch: 'full' },
  { path: 'pipes', component: Pipes, pathMatch: 'full' },
  { path: 'reactive-form', component: ReactiveForm, pathMatch: 'full' },
  { path: 'template-form', component: TemplateForm, pathMatch: 'full' },
  ...primengComponentRoutes,
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
