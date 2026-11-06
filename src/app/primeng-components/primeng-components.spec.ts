import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PrimengComponents } from './primeng-components';
import { primengComponentRoutes } from './primeng-components.routes';

describe('PrimengComponents', () => {
  let component: PrimengComponents;
  let fixture: ComponentFixture<PrimengComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengComponents],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimengComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens the component menu from the navigation control', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.textContent).toContain('Open component menu');

    button.click();

    expect(component.drawerVisible).toBe(true);
  });

  it('keeps every gallery page under the parent route', () => {
    const galleryRoute = primengComponentRoutes[0];
    const paths = galleryRoute.children?.map((route) => route.path);

    expect(galleryRoute.path).toBe('primeng-components');
    expect(paths).toEqual([
      '',
      'buttons',
      'carousel',
      'inputs',
      'date-picker',
      'list-box',
      'slider',
      'table',
      'feedback',
      'toast',
      'file-upload',
      'stepper',
      'tabs',
      'confirm-dialog',
      'overlay',
      'layout',
      'pagination',
    ]);
  });
});
