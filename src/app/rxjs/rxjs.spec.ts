import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rxjs } from './rxjs';

describe('Rxjs', () => {
  let component: Rxjs;
  let fixture: ComponentFixture<Rxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjs],
    }).compileComponents();

    fixture = TestBed.createComponent(Rxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders users from the observable stream', () => {
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Breno Farias');
    expect(text).toContain('Victor Gerardo');
    expect(text).toContain('Sergio Juvencio');
    expect(text).toContain('Active');
  });
});
