// TypeScript root component that displays the page selected by the router.
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideNavDrawer } from './side-nav-drawer/side-nav-drawer';

@Component({
  imports: [RouterOutlet, SideNavDrawer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  isLoginRoute() {
    return this.router.url === '/';
  }
}
