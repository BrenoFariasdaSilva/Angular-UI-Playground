import { Component } from '@angular/core';
@Component({
  selector: 'app-control-flow-page',
  template: `<section><h2>Control flow</h2><p>&#64;if and &#64;for render only the needed DOM.</p>@for (person of people; track person) { <p>{{ person }}</p> }</section>`,
})
export class ControlFlowPage {
  people = [
    'Sergio Juvencio — CEO',
    'Victor Gerardo — CTO',
    'Govin Raju — COO',
    'Breno Farias — Software Developer',
  ];
}
