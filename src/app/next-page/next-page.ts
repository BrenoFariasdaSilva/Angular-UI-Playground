// TypeScript component definition for the page shown at the next-page route.
import { Component } from '@angular/core';
// Built-in pipes format dates, numbers, currency, text, and objects in the template.
import {
  CurrencyPipe,
} from '@angular/common';
// FormsModule provides ngModel for connecting the input to component state.
import { FormsModule } from '@angular/forms';
// RouterLink lets the template navigate back to the root route.
import { RouterLink } from '@angular/router';
import { Counter } from '../counter/counter';
import { DataBinding } from '../data-binding/data-binding';

// Standalone component metadata declares the template, styles, and template dependencies.
@Component({
  imports: [
    CurrencyPipe,
    FormsModule,
    RouterLink,
    Counter,
    DataBinding
],
  selector: 'app-next-page',
  styleUrl: './next-page.css',
  templateUrl: './next-page.html',
})
export class NextPage {
  // Component state holding the current price shown in the input and currency output.
  price = 0;
  readonly eurUsdRatio = 1.12;

  // Keep the entered value within the allowed range; null is treated as zero.
  updatePrice(value: number | null): void {
    this.price = Math.min(100, Math.max(0, value ?? 0));
  }
}
