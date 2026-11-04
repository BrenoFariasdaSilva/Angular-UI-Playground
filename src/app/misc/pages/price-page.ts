import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Counter } from '../../counter/counter';
@Component({
  selector: 'app-price-page',
  imports: [CurrencyPipe, FormsModule, Counter],
  template: `<section>
    <h2>Price and currency</h2>
    <input
      type="number"
      min="0"
      max="100"
      [(ngModel)]="price"
      (ngModelChange)="priceChangeCounter.increment()"
    />
    <p>{{ price | currency: 'EUR' }} · {{ price * 1.12 | currency: 'USD' }}</p>
    <app-counter #priceChangeCounter />
  </section>`,
})
export class PricePage {
  price = 0;
}
