import { Routes } from '@angular/router';
import { Pipes } from './pipes';
export const pipeRoutes: Routes = [
  {
    path: 'pipes',
    component: Pipes,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'date' },
      { path: 'date', loadComponent: () => import('./pages/date-page').then((m) => m.DatePage) },
      {
        path: 'numbers',
        loadComponent: () => import('./pages/numbers-page').then((m) => m.NumbersPage),
      },
      { path: 'text', loadComponent: () => import('./pages/text-page').then((m) => m.TextPage) },
      { path: 'data', loadComponent: () => import('./pages/data-page').then((m) => m.DataPage) },
      {
        path: 'interest',
        loadComponent: () => import('./pages/interest-page').then((m) => m.InterestPage),
      },
    ],
  },
];
