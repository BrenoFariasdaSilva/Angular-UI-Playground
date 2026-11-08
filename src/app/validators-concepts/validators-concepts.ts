import { Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-validators-concepts',
  styleUrl: './validators-concepts.css',
  templateUrl: './validators-concepts.html',
})
export class ValidatorsConcepts {
  readonly submitted = signal(false);

  readonly form = new FormGroup(
    {
      displayName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(24)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^[a-z][a-z0-9_]{2,15}$/i)],
      }),
      age: new FormControl<number | null>(null, [Validators.required, Validators.min(18), Validators.max(120)]),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8)],
      }),
      confirmPassword: new FormControl('', { nonNullable: true, validators: Validators.required }),
      acceptTerms: new FormControl(false, { nonNullable: true, validators: Validators.requiredTrue }),
    },
    { validators: passwordsMatch },
  );

  hasError(controlName: string, error: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.hasError(error) && (control.dirty || control.touched);
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.submitted.set(this.form.valid);
  }
}
