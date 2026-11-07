import { Component } from '@angular/core';
@Component({
  selector: 'app-control-flow-page',
  template: `<section class="concept-page">
    <h2>Control flow</h2>
    <p>Use the toggle to show or hide the rendered people list.</p>
    <div class="demo-panel">
      <button
        class="demo-button demo-toggle"
        type="button"
        [attr.aria-pressed]="showPeople"
        (click)="showPeople = !showPeople"
      >
        {{ showPeople ? 'Hide people' : 'Show people' }}
      </button>
      <span class="demo-label">{{ showPeople ? 'People are visible' : 'People are hidden' }}</span>
    </div>
    <p><code>&#64;if (showPeople) &#123; ... &#125;</code></p>
    @if (showPeople) {
      <p class="demo-result">People are currently rendered.</p>
      <p><code>&#64;for (person of people; track person) &#123; ... &#125;</code></p>
      <ul class="people-list">
        @for (person of people; track person) {
          <li>{{ person }}</li>
        }
      </ul>
    }
  </section>`,
})
export class ControlFlowPage {
  showPeople = true;
  people = [
    'Sergio Juvencio — CEO',
    'Victor Gerardo — CTO',
    'Govin Raju — COO',
    'Breno Farias — Software Developer',
  ];
}
