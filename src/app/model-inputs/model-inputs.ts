import { Component, computed, signal } from '@angular/core';
import { QuantityPicker } from './quantity-picker';

@Component({
  imports: [QuantityPicker],
  selector: 'app-model-inputs',
  styleUrl: './model-inputs.css',
  templateUrl: './model-inputs.html',
})
export class ModelInputs {
  readonly quantity = signal(1);
  readonly unitPrice = 29;
  readonly total = computed(() => this.quantity() * this.unitPrice);
}
