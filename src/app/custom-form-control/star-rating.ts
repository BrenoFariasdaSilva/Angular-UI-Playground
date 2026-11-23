import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRating),
      multi: true,
    },
  ],
  selector: 'app-star-rating',
  styleUrl: './star-rating.css',
  templateUrl: './star-rating.html',
})
export class StarRating implements ControlValueAccessor {
  readonly stars = [1, 2, 3, 4, 5];
  value = 0;
  disabled = false;
  private onChange: (value: number) => void = () => undefined;
  private onTouched: () => void = () => undefined;

  writeValue(value: number | null): void {
    this.value = value ?? 0;
  }

  registerOnChange(onChange: (value: number) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  select(value: number): void {
    if (this.disabled) {
      return;
    }

    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
