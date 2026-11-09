import { Routes } from '@angular/router';
import { PrimengComponents } from './primeng-components';

export const primengComponentRoutes: Routes = [
  {
    path: 'primeng-components',
    component: PrimengComponents,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'buttons' },
      {
        path: 'buttons',
        loadComponent: () => import('./pages/buttons/buttons-page').then((m) => m.ButtonsPage),
      },
      {
        path: 'carousel',
        loadComponent: () => import('./pages/carousel/carousel-page').then((m) => m.CarouselPage),
      },
      {
        path: 'inputs',
        loadComponent: () => import('./pages/inputs/inputs-page').then((m) => m.InputsPage),
      },
      {
        path: 'infinite-scroll',
        loadComponent: () =>
          import('./pages/infinite-scroll/infinite-scroll-page').then((m) => m.InfiniteScrollPage),
      },
      {
        path: 'date-picker',
        loadComponent: () =>
          import('./pages/datepicker/datepicker-page').then((m) => m.DatepickerPage),
      },
      {
        path: 'list-box',
        loadComponent: () => import('./pages/listbox/listbox-page').then((m) => m.ListboxPage),
      },
      {
        path: 'slider',
        loadComponent: () => import('./pages/slider/slider-page').then((m) => m.SliderPage),
      },
      {
        path: 'table',
        loadComponent: () => import('./pages/table/table-page').then((m) => m.TablePage),
      },
      {
        path: 'feedback',
        loadComponent: () => import('./pages/feedback/feedback-page').then((m) => m.FeedbackPage),
      },
      {
        path: 'toast',
        loadComponent: () => import('./pages/toast/toast-page').then((m) => m.ToastPage),
      },
      {
        path: 'file-upload',
        loadComponent: () =>
          import('./pages/fileupload/fileupload-page').then((m) => m.FileuploadPage),
      },
      {
        path: 'stepper',
        loadComponent: () => import('./pages/stepper/stepper-page').then((m) => m.StepperPage),
      },
      {
        path: 'tabs',
        loadComponent: () => import('./pages/tabs/tabs-page').then((m) => m.TabsPage),
      },
      {
        path: 'confirm-dialog',
        loadComponent: () =>
          import('./pages/confirmdialog/confirmdialog-page').then((m) => m.ConfirmdialogPage),
      },
      {
        path: 'overlay',
        loadComponent: () => import('./pages/overlay/overlay-page').then((m) => m.OverlayPage),
      },
      {
        path: 'layout',
        loadComponent: () => import('./pages/layout/layout-page').then((m) => m.LayoutPage),
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./pages/pagination/pagination-page').then((m) => m.PaginationPage),
      },
    ],
  },
];
