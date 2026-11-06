import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Rxjs } from './rxjs';

describe('Rxjs', () => {
  let component: Rxjs;
  let fixture: ComponentFixture<Rxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjs],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Rxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders links to the RxJS concept pages', () => {
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Source');
    expect(text).toContain('Map');
    expect(text).toContain('Filter');
    expect(text).toContain('BehaviorSubject');
  });
});
