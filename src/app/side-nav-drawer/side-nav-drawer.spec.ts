import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SideNavDrawer } from './side-nav-drawer';

describe('SideNavDrawer', () => {
  let component: SideNavDrawer;
  let fixture: ComponentFixture<SideNavDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavDrawer],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps Home first and alphabetizes the remaining links', () => {
    expect(component.navigation.map((item) => item.label)).toEqual([
      'Home', 'Angular Concepts', 'Dialog', 'Infinite Scroll', 'Pipes', 'Price Playground',
      'PrimeNG Components', 'Reactive Form', 'Responsiveness', 'RxJS', 'Tailwind Concepts',
      'Template Form', 'Themes', 'Validators',
    ]);
  });

  it('opens and closes the PrimeNG drawer', () => {
    const trigger = fixture.nativeElement.querySelector(
      'button[aria-label="Open navigation"]',
    ) as HTMLButtonElement;

    trigger.click();
    expect(component.visible).toBe(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button[aria-label="Open navigation"]')).not.toBeNull();

    // The drawer's close control resets its visibility state.
    const closeButton = fixture.nativeElement.querySelector(
      'button[aria-label="Close navigation"]',
    ) as HTMLButtonElement;
    closeButton.click();
    fixture.detectChanges();
    expect(component.visible).toBe(false);

    trigger.click();
    expect(component.visible).toBe(true);
  });

});
