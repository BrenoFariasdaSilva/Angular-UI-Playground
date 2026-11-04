import { Component } from '@angular/core';
@Component({
  selector: 'app-control-flow-page',
  template: `<section>
    <h2>Control flow</h2>
    <button (click)="showPeople = !showPeople">Toggle people</button>
    <p><code>&#64;if (showPeople) &#123; ... &#125;</code></p>
    @if (showPeople) {
      <p>People are currently rendered.</p>
    }
    <p><code>&#64;for (person of people; track person) &#123; ... &#125;</code></p>
    @for (person of people; track person) {
      <p>{{ person }}</p>
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
