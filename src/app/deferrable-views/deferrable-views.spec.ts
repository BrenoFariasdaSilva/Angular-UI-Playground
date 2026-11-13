import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeferrableViews } from './deferrable-views';

describe('DeferrableViews', () => {
  let fixture: ComponentFixture<DeferrableViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableViews],
    }).compileComponents();

    fixture = TestBed.createComponent(DeferrableViews);
    fixture.detectChanges();
  });

  it('renders the deferred preview placeholder', () => {
    expect(fixture.nativeElement.textContent).toContain('Load the deferred preview');
  });
});
