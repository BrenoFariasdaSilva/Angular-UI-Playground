import { Routes } from '@angular/router';
import { PrimengComponents } from './primeng-components';

export const primengComponentRoutes: Routes = [
  {
    path: 'primeng-components',
    component: PrimengComponents,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'buttons' },
      { path: 'buttons', loadComponent: () => import('./pages/buttons/buttons-page').then((m) => m.ButtonsPage) },
      { path: 'inputs', loadComponent: () => import('./pages/inputs/inputs-page').then((m) => m.InputsPage) },
      { path: 'date-picker', loadComponent: () => import('./pages/datepicker/datepicker-page').then((m) => m.DatepickerPage) },
      { path: 'list-box', loadComponent: () => import('./pages/listbox/listbox-page').then((m) => m.ListboxPage) },
      { path: 'slider', loadComponent: () => import('./pages/slider/slider-page').then((m) => m.SliderPage) },
      { path: 'table', loadComponent: () => import('./pages/table/table-page').then((m) => m.TablePage) },
      { path: 'feedback', loadComponent: () => import('./pages/feedback/feedback-page').then((m) => m.FeedbackPage) },
      { path: 'overlay', loadComponent: () => import('./pages/overlay/overlay-page').then((m) => m.OverlayPage) },
      { path: 'layout', loadComponent: () => import('./pages/layout/layout-page').then((m) => m.LayoutPage) },
      { path: 'pagination', loadComponent: () => import('./pages/pagination/pagination-page').then((m) => m.PaginationPage) },
    ],
  },
];
