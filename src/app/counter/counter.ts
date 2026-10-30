// TypeScript logic for the signal-backed price-change counter component.
import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  readonly count = signal(0);

  increment(): void {
    this.count.update((currentCount) => currentCount + 1);
  }
}
