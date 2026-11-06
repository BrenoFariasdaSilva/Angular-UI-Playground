import { Routes } from '@angular/router';
import { Rxjs } from './rxjs';

export const rxjsRoutes: Routes = [
  {
    path: 'rxjs',
    component: Rxjs,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'source' },
      {
        path: 'source',
        loadComponent: () => import('./pages/source-page').then((m) => m.SourcePage),
      },
      { path: 'map', loadComponent: () => import('./pages/map-page').then((m) => m.MapPage) },
      {
        path: 'filter',
        loadComponent: () => import('./pages/filter-page').then((m) => m.FilterPage),
      },
      {
        path: 'behavior-subject',
        loadComponent: () =>
          import('./pages/behavior-subject-page').then((m) => m.BehaviorSubjectPage),
      },
      {
        path: 'from-event',
        loadComponent: () => import('./pages/from-event-page').then((m) => m.FromEventPage),
      },
      {
        path: 'combine-latest',
        loadComponent: () => import('./pages/combine-latest-page').then((m) => m.CombineLatestPage),
      },
    ],
  },
];
