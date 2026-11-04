import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-interpolation-page',
  template: `<section>
    <h2>Interpolation</h2>
    <p>
      <code>{{ '{{ 2 + 2 }}' }}</code> → {{ 2 + 2 }}
    </p>
    <p>
      <code>{{ '{{ 2 === 2 }}' }}</code> → {{ 2 === 2 }}
    </p>
    <p>
      <code>{{ '{{ title() }}' }}</code> → {{ title() }}
    </p>
  </section>`,
})
export class InterpolationPage {
  readonly title = signal('myApp2');
}
