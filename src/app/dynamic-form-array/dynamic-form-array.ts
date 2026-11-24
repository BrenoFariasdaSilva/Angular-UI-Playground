import { Component, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-dynamic-form-array',
  styleUrl: './dynamic-form-array.css',
  templateUrl: './dynamic-form-array.html',
})
export class DynamicFormArray {
  readonly submitted = signal(false);
  readonly form = new FormGroup({
    skills: new FormArray([this.createSkill()]),
  });

  get skills(): FormArray<FormControl<string>> {
    return this.form.controls.skills;
  }

  addSkill(): void {
    this.skills.push(this.createSkill());
    this.submitted.set(false);
  }

  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
      this.submitted.set(false);
    }
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.submitted.set(this.form.valid);
  }

  private createSkill(): FormControl<string> {
    return new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    });
  }
}
