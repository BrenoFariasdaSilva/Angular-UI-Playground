import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  imports: [DatePipe],
  template: `<section>
    <h2>DatePipe</h2>
    <p>
      <code>today | date:'shortDate'</code> →
      {{ today | date: 'shortDate' }}
    </p>
    <p>
      <code>today | date:'mediumDate'</code> →
      {{ today | date: 'mediumDate' }}
    </p>
    <p>
      <code>today | date:'shortTime'</code> →
      {{ today | date: 'shortTime' }}
    </p>
    <p>
      <code>today | date:'fullDate'</code> →
      {{ today | date: 'fullDate' }}
    </p>
    <p>
      <code>today | date:'yyyy-MM-dd'</code> →
      {{ today | date: 'yyyy-MM-dd' }}
    </p>
  </section>`,
})
export class DatePage {
  today = new Date();
}
