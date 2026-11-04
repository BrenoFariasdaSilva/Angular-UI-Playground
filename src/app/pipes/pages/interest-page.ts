import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InterestPipe } from '../../custom-pipes/interest-pipe';
@Component({
  imports: [CurrencyPipe, InterestPipe],
  template: `<section>
    <h2>Custom Pipe</h2>
    <p>Create a pipe with <code>ng generate pipe interest</code>.</p>
    <p>The generated pipe implements <code>PipeTransform</code> and returns a transformed value.</p>
    <pre><code>import &#123; Pipe, PipeTransform &#125; from '@angular/core';

&#64;Pipe(&#123; name: 'interest' &#125;)
export class InterestPipe implements PipeTransform &#123;
  transform(value: number, interestRate = 0.01): number | null &#123;
    return typeof value === 'undefined' ? null : value * interestRate;
  &#125;
&#125;</code></pre>
    <p>
      Import <code>InterestPipe</code> from <code>custom-pipes/interest-pipe</code> in the component,
      then use it in the template:
      <code>100 | interest:0.025 | currency</code> →
      {{ 100 | interest: 0.025 | currency }}
    </p>
  </section>`,
})
export class InterestPage {}
