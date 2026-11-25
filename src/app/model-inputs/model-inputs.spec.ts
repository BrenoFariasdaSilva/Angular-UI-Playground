import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelInputs } from './model-inputs';

describe('ModelInputs', () => {
  let fixture: ComponentFixture<ModelInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInputs],
    }).compileComponents();

    fixture = TestBed.createComponent(ModelInputs);
    fixture.detectChanges();
  });

  it('updates the parent signal through the quantity model input', () => {
    const increaseButton = fixture.nativeElement.querySelector(
      'button[aria-label="Increase quantity"]',
    ) as HTMLButtonElement;

    increaseButton.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.quantity()).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Total: $58');
  });
});
