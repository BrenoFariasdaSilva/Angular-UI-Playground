import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeConcepts } from './theme-concepts';

describe('ThemeConcepts', () => {
  let fixture: ComponentFixture<ThemeConcepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeConcepts],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeConcepts);
    fixture.detectChanges();
  });

  it('explains the global theme behavior', () => {
    expect(fixture.nativeElement.textContent).toContain('One theme, every page');
    expect(fixture.nativeElement.textContent).toContain('Remember the choice');
  });
});
