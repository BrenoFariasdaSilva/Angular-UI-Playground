import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Counter } from '../../counter/counter';
@Component({
  selector: 'app-price-page',
  imports: [CurrencyPipe, FormsModule, Counter],
  template: `<section class="concept-page">
    <h2>Price and currency</h2>
    <p>Enter a euro amount to see the matching US-dollar value.</p>
    <div class="demo-panel">
      <label class="demo-field">
        <span>Price in euros</span>
        <input
          type="number"
          min="0"
          max="100"
          [(ngModel)]="price"
          (ngModelChange)="priceChangeCounter.increment()"
        />
      </label>
      <p class="demo-result">{{ price | currency: 'EUR' }} · {{ price * 1.12 | currency: 'USD' }}</p>
      <app-counter #priceChangeCounter />
    </div>
  </section>`,
})
export class PricePage {
  price = 0;
}
