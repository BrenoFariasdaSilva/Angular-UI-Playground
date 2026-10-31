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

  it('keeps every gallery page under the parent route', () => {
    const galleryRoute = primengComponentRoutes[0];
    const paths = galleryRoute.children?.map((route) => route.path);

    expect(galleryRoute.path).toBe('primeng-components');
    expect(paths).toEqual([
      '', 'buttons', 'inputs', 'date-picker', 'list-box', 'slider', 'table',
      'feedback', 'overlay', 'layout', 'pagination',
    ]);
  });
});
