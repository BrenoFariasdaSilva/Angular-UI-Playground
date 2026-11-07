// TypeScript root component that displays the page selected by the router.
import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideNavDrawer } from './side-nav-drawer/side-nav-drawer';

@Component({
  imports: [RouterOutlet, SideNavDrawer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly themeStorageKey = 'angular-ui-playground.theme';
  readonly isDarkTheme = signal(this.document.documentElement.classList.contains('app-dark'));

  constructor() {
    this.setTheme(this.document.defaultView?.localStorage.getItem(this.themeStorageKey) === 'dark');
  }

  isLoginRoute() {
    return this.router.url === '/';
  }

  toggleTheme(): void {
    this.setTheme(!this.isDarkTheme());
  }

  private setTheme(isDark: boolean): void {
    this.document.documentElement.classList.toggle('app-dark', isDark);
    this.document.defaultView?.localStorage.setItem(this.themeStorageKey, isDark ? 'dark' : 'light');
    this.isDarkTheme.set(isDark);
  }
}
