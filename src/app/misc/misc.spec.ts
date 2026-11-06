import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Misc } from './misc';
import { miscRoutes } from './misc.routes';

describe('Misc', () => {
  let component: Misc;
  let fixture: ComponentFixture<Misc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misc],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Misc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens the first alphabetical tab by default', () => {
    expect(component.navigation.map((item) => item.label)).toEqual([
      'Bindings',
      'Control flow',
      'Data binding',
      'Events',
      'Interpolation',
      'Price',
    ]);

    expect(miscRoutes[0].children?.[0].redirectTo).toBe('bindings');
  });
});
