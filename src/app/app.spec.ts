// TypeScript unit tests for the root App component.
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    window.localStorage.removeItem('angular-ui-playground.theme');
    document.documentElement.classList.remove('app-dark');

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('switches the application theme', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.theme-toggle') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(document.documentElement.classList.contains('app-dark')).toBe(true);
    expect(button.getAttribute('aria-label')).toBe('Switch to light theme');
  });

  it('should render the navigation drawer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-side-nav-drawer')).toBeTruthy();
  });
});
