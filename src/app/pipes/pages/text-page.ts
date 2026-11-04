import { Component } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
@Component({
  imports: [LowerCasePipe, TitleCasePipe, UpperCasePipe],
  template: `<section>
    <h2>Text pipes</h2>
    <p><code>&#123;&#123; text | uppercase &#125;&#125;</code> → {{ text | uppercase }}</p>
    <p><code>&#123;&#123; text | lowercase &#125;&#125;</code> → {{ text | lowercase }}</p>
    <p><code>&#123;&#123; text | titlecase &#125;&#125;</code> → {{ text | titlecase }}</p>
  </section>`,
})
export class TextPage {
  text = 'Smart Ideal World Job interview!';
}
