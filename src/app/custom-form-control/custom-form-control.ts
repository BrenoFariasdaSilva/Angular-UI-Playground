import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StarRating } from './star-rating';

@Component({
  imports: [ReactiveFormsModule, StarRating],
  selector: 'app-custom-form-control',
  styleUrl: './custom-form-control.css',
  templateUrl: './custom-form-control.html',
})
export class CustomFormControl {
  readonly submitted = signal(false);
  readonly feedbackForm = new FormGroup({
    rating: new FormControl(0, { nonNullable: true, validators: Validators.min(1) }),
  });

  submit(): void {
    this.feedbackForm.markAllAsTouched();
    this.submitted.set(this.feedbackForm.valid);
  }
}
