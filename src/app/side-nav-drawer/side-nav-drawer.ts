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
    { label: 'Price Playground', path: '/next-page' },
    { label: 'Dialog', path: '/dialog' },
    { label: 'Angular Concepts', path: '/misc' },
    { label: 'Pipes', path: '/pipes' },
    { label: 'Reactive Form', path: '/reactive-form' },
    { label: 'Template Form', path: '/template-form' },
    { label: 'PrimeNG Components', path: '/primeng-components' },
  ].sort((left, right) => {
    if (left.path === '/home') return -1;
    if (right.path === '/home') return 1;
    return left.label.localeCompare(right.label);
  });

  openDrawer(): void {
    this.visible = true;
  }

  closeDrawer(): void {
    this.visible = false;
  }
}
