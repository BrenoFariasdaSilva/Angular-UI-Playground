import { Component } from '@angular/core';
@Component({
  selector: 'app-bindings-page',
  template: `<section>
    <h2>Property and event bindings</h2>
    <input #name [type]="inputType" placeholder="Enter your name" /><button
      (click)="greeting = name.value"
    >
      Greet
    </button>
    <p>{{ greeting }}</p>
  </section>`,
})
export class BindingsPage {
  inputType = 'text';
  greeting = '';
}
