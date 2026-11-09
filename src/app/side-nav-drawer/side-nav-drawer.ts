import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';

@Component({
  imports: [DrawerModule, RouterLink],
  selector: 'app-side-nav-drawer',
  styleUrl: './side-nav-drawer.css',
  templateUrl: './side-nav-drawer.html',
})
export class SideNavDrawer {
  visible = false;

  readonly navigation = [
    { label: 'Home', path: '/home' },
    { label: 'Angular Concepts', path: '/misc' },
    { label: 'Dialog', path: '/dialog' },
    { label: 'Infinite Scroll', path: '/primeng-components/infinite-scroll' },
    { label: 'Pipes', path: '/pipes' },
    { label: 'Price Playground', path: '/next-page' },
    { label: 'PrimeNG Components', path: '/primeng-components' },
    { label: 'Reactive Form', path: '/reactive-form' },
    { label: 'Responsiveness', path: '/responsiveness' },
    { label: 'RxJS', path: '/rxjs' },
    { label: 'Tailwind Concepts', path: '/tailwind-concepts' },
    { label: 'Template Form', path: '/template-form' },
    { label: 'Themes', path: '/themes' },
    { label: 'Validators', path: '/validators' },
  ];
}
