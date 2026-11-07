import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-interpolation-page',
  template: `<section class="concept-page">
    <h2>Interpolation</h2>
    <p>Interpolation renders a component expression as text in the template.</p>
    <ul class="interpolation-list">
      <li><code>{{ '{{ 2 + 2 }}' }}</code><span class="interpolation-value">{{ 2 + 2 }}</span></li>
      <li><code>{{ '{{ 2 === 2 }}' }}</code><span class="interpolation-value">{{ 2 === 2 }}</span></li>
      <li><code>{{ '{{ title() }}' }}</code><span class="interpolation-value">{{ title() }}</span></li>
    </ul>
  </section>`,
})
export class InterpolationPage {
  readonly title = signal('myApp2');
}
