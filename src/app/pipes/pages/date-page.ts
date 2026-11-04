import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  imports: [DatePipe],
  template: `<section>
    <h2>DatePipe</h2>
    <p>
      <code>&#123;&#123; today | date: 'shortDate' &#125;&#125;</code> →
      {{ today | date: 'shortDate' }}
    </p>
  </section>`,
})
export class DatePage {
  today = new Date();
}
