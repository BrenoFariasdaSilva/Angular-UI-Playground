import { Component } from '@angular/core';
import { JsonPipe, SlicePipe } from '@angular/common';
@Component({
  imports: [JsonPipe, SlicePipe],
  template: `<section>
    <h2>SlicePipe and JsonPipe</h2>
    <p><code>text | slice:0:14</code> → {{ text | slice: 0 : 14 }}</p>
    <p><code>object | json</code></p>
    <pre>{{ object | json }}</pre>
  </section>`,
})
export class DataPage {
  text = 'Smart Ideal World Job interview!';
  object = { framework: 'Angular', feature: 'Pipes' };
}
