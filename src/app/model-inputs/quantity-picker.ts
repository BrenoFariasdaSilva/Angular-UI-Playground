import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantity-picker',
  styleUrl: './quantity-picker.css',
  templateUrl: './quantity-picker.html',
})
export class QuantityPicker {
  readonly quantity = model(1);

  decrement(): void {
    if (this.quantity() > 1) {
      this.quantity.update((value) => value - 1);
    }
  }

  increment(): void {
    this.quantity.update((value) => value + 1);
  }
}
