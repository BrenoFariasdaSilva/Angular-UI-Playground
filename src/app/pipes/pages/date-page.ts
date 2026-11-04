import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  imports: [DatePipe],
  template: `<section>
    <h2>DatePipe</h2>
    <p>
      <code>&#123;&#123; today | date:'shortDate' &#125;&#125;</code> →
      {{ today | date: 'shortDate' }}
    </p>
    <p>
      <code>&#123;&#123; today | date:'mediumDate' &#125;&#125;</code> →
      {{ today | date: 'mediumDate' }}
    </p>
    <p>
      <code>&#123;&#123; today | date:'shortTime' &#125;&#125;</code> →
      {{ today | date: 'shortTime' }}
    </p>
    <p>
      <code>&#123;&#123; today | date:'fullDate' &#125;&#125;</code> →
      {{ today | date: 'fullDate' }}
    </p>
    <p>
      <code>&#123;&#123; today | date:'yyyy-MM-dd' &#125;&#125;</code> →
      {{ today | date: 'yyyy-MM-dd' }}
    </p>
  </section>`,
})
export class DatePage {
  today = new Date();
}
