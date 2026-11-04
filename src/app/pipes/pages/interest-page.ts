import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InterestPipe } from '../../interest-pipe';
@Component({
  imports: [CurrencyPipe, InterestPipe],
  template: `<section>
    <h2>Custom InterestPipe</h2>
    <p>
      <code>&#123;&#123; 100 | interest:0.025 | currency &#125;&#125;</code> →
      {{ 100 | interest: 0.025 | currency }}
    </p>
  </section>`,
})
export class InterestPage {}
