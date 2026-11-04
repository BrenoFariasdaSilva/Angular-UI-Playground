import { Component } from '@angular/core';
import { JsonPipe, SlicePipe } from '@angular/common';
@Component({
  imports: [JsonPipe, SlicePipe],
  template: `<section>
    <h2>SlicePipe and JsonPipe</h2>
    <p><code>&#123;&#123; text | slice:0:14 &#125;&#125;</code> → {{ text | slice: 0 : 14 }}</p>
    <p><code>&#123;&#123; object | json &#125;&#125;</code></p>
    <pre>{{ object | json }}</pre>
  </section>`,
})
export class DataPage {
  text = 'Smart Ideal World Job interview!';
  object = { framework: 'Angular', feature: 'Pipes' };
}
