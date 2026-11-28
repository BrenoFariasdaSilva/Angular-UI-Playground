import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTransforms } from './input-transforms';

describe('InputTransforms', () => {
  let fixture: ComponentFixture<InputTransforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTransforms],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTransforms);
    fixture.detectChanges();
  });

  it('coerces number and boolean attribute values for the reading goals', () => {
    expect(fixture.nativeElement.textContent).toContain('90 minutes');
    expect(fixture.nativeElement.textContent).toContain('30 minutes');
    expect(fixture.nativeElement.textContent).toContain('Reminder disabled');
    expect(fixture.nativeElement.textContent).toContain('Reminder enabled');
  });
});
