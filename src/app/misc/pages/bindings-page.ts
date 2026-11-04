import { Component } from '@angular/core';
@Component({
  selector: 'app-bindings-page',
  template: `<section>
    <h2>Property and event bindings</h2>
    <p>
      <code>[type]="inputType"</code> is property binding: Angular assigns the component's
      <code>inputType</code> value to the input element's <code>type</code> property.
    </p>
    <p>
      <code>(click)="greeting = name.value"</code> is event binding: Angular runs the expression
      when the button emits a click event.
    </p>
    <p>
      <code>#name</code> creates a template reference, so the click expression can read the input's
      current value.
    </p>
    <input #name [type]="inputType" placeholder="Enter your name" /><button
      (click)="greeting = name.value"
    >
      Greet
    </button>
    @if (greeting) {
      <p role="status">Greeting: {{ greeting }}</p>
    }
  </section>`,
})
export class BindingsPage {
  inputType = 'text';
  greeting = '';
}
