import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveForm } from './reactive-form';

describe('ReactiveForm', () => {
  let component: ReactiveForm;
  let fixture: ComponentFixture<ReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('requires valid registration values', () => {
    expect(component.loginForm.invalid).toBe(true);

    component.loginForm.setValue({
      username: 'Breno',
      phone: '(11) 99999-9999',
      birthdate: '01/01/2000',
      password: 'password',
    });

    expect(component.loginForm.valid).toBe(true);
  });
});
