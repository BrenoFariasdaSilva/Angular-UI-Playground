import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Counter } from '../../counter/counter';
import { DataBinding } from '../../data-binding/data-binding';
@Component({
  selector: 'app-price-page',
  imports: [CurrencyPipe, FormsModule, Counter, DataBinding],
  template: `<section>
    <h2>Price and data binding</h2>
    <input type="number" min="0" max="100" [(ngModel)]="price" />
    <p>{{ price | currency: 'EUR' }} · {{ price * 1.12 | currency: 'USD' }}</p>
    <app-counter /><app-data-binding />
  </section>`,
})
export class PricePage {
  price = 0;
}
