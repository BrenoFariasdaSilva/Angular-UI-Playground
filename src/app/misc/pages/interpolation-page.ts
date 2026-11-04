import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-interpolation-page',
  template: `<section>
    <h2>Interpolation</h2>
    <p>Sum: {{ 2 + 2 }}</p>
    <p>Strict equality: {{ 2 === 2 }}</p>
    <h3>{{ title() }}</h3>
  </section>`,
})
export class InterpolationPage {
  readonly title = signal('myApp2');
}
