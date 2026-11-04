import { Component } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
@Component({
  imports: [LowerCasePipe, TitleCasePipe, UpperCasePipe],
  template: `<section>
    <h2>Text pipes</h2>
    <p>
      <code>text = '{{ text }}'</code>
    </p>
    <p><code>text | uppercase</code> → {{ text | uppercase }}</p>
    <p><code>text | lowercase</code> → {{ text | lowercase }}</p>
    <p><code>text | titlecase</code> → {{ text | titlecase }}</p>
  </section>`,
})
export class TextPage {
  text = 'Smart Ideal World Job interview!';
}
