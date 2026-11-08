import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidatorsConcepts } from './validators-concepts';

describe('ValidatorsConcepts', () => {
  let component: ValidatorsConcepts;
  let fixture: ComponentFixture<ValidatorsConcepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatorsConcepts],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidatorsConcepts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts with an invalid form', () => {
    expect(component.form.invalid).toBe(true);
  });

  it('accepts values that satisfy every validator', () => {
    component.form.setValue({
      displayName: 'Breno Farias',
      email: 'breno@example.com',
      username: 'breno_farias',
      age: 30,
      password: 'password',
      confirmPassword: 'password',
      acceptTerms: true,
    });

    expect(component.form.valid).toBe(true);
  });
});
