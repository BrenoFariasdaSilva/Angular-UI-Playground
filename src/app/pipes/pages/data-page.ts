import { Component } from '@angular/core';
import { JsonPipe, SlicePipe } from '@angular/common';
@Component({
  imports: [JsonPipe, SlicePipe],
  template: `<section>
    <h2>SlicePipe and JsonPipe</h2>
    <p>{{ text | slice: 0 : 14 }}</p>
    <pre>{{ object | json }}</pre>
  </section>`,
})
export class DataPage {
  text = 'Smart Ideal World Job interview!';
  object = { framework: 'Angular', feature: 'Pipes' };
}
