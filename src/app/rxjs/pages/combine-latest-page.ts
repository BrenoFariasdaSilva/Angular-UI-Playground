import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  styleUrl: './rxjs-page.css',
  template: `<section class="rxjs-page">
    <h2>combineLatest: order total</h2>
    <p>
      <code>combineLatest()</code> emits whenever any input stream changes, using the latest value
      from every input.
    </p>
    <p>Adjust the price or quantity to recalculate the total from the latest values.</p>
    <div class="controls">
      <label>
        Price: {{ price$.value }}
        <input type="range" min="1" max="100" [value]="price$.value" (input)="setPrice($event)" />
      </label>
      <label>
        Quantity: {{ quantity$.value }}
        <input
          type="range"
          min="1"
          max="10"
          [value]="quantity$.value"
          (input)="setQuantity($event)"
        />
      </label>
    </div>
    <p class="current-user">Total: {{ total$ | async }}</p>
  </section>`,
})
export class CombineLatestPage {
  readonly price$ = new BehaviorSubject(10);
  readonly quantity$ = new BehaviorSubject(1);
  readonly total$ = combineLatest([this.price$, this.quantity$]).pipe(
    map(([price, quantity]) => price * quantity),
  );

  setPrice(event: Event): void {
    this.price$.next(Number((event.target as HTMLInputElement).value));
  }

  setQuantity(event: Event): void {
    this.quantity$.next(Number((event.target as HTMLInputElement).value));
  }
}
