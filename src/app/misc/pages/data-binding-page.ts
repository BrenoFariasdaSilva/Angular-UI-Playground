import { Component } from '@angular/core';
import { DataBinding } from '../../data-binding/data-binding';

@Component({
  selector: 'app-data-binding-page',
  imports: [DataBinding],
  template: `<section class="concept-page">
    <h2>Data binding</h2>
    <p>Compare manual property/event binding with <code>[(ngModel)]</code> two-way binding.</p>
    <app-data-binding />
  </section>`,
})
export class DataBindingPage {}
