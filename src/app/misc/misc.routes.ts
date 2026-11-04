import { Routes } from '@angular/router';
import { Misc } from './misc';

export const miscRoutes: Routes = [
  {
    path: 'misc',
    component: Misc,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'interpolation' },
      {
        path: 'interpolation',
        loadComponent: () => import('./pages/interpolation-page').then((m) => m.InterpolationPage),
      },
      {
        path: 'bindings',
        loadComponent: () => import('./pages/bindings-page').then((m) => m.BindingsPage),
      },
      {
        path: 'control-flow',
        loadComponent: () => import('./pages/control-flow-page').then((m) => m.ControlFlowPage),
      },
      {
        path: 'data-binding',
        loadComponent: () => import('./pages/data-binding-page').then((m) => m.DataBindingPage),
      },
      {
        path: 'events',
        loadComponent: () => import('./pages/events-page').then((m) => m.EventsPage),
      },
      { path: 'price', loadComponent: () => import('./pages/price-page').then((m) => m.PricePage) },
    ],
  },
];
