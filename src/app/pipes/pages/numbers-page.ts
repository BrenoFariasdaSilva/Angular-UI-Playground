import { Component } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
@Component({
  imports: [CurrencyPipe, DecimalPipe, PercentPipe],
  template: `<section>
    <h2>Number pipes</h2>
    <p><code>1234.5 | currency</code> → {{ 1234.5 | currency }}</p>
    <p>
      <code>12345.678 | number:'1.2-2'</code> →
      {{ 12345.678 | number: '1.2-2' }}
    </p>
    <p>
      <code>0.8235 | percent:'1.0-2'</code> →
      {{ 0.8235 | percent: '1.0-2' }}
    </p>
  </section>`,
})
export class NumbersPage {}
