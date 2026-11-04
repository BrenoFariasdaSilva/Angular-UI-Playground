import { Component } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
@Component({
  imports: [LowerCasePipe, TitleCasePipe, UpperCasePipe],
  template: `<section>
    <h2>Text pipes</h2>
    <p>{{ text | uppercase }}</p>
    <p>{{ text | lowercase }}</p>
    <p>{{ text | titlecase }}</p>
  </section>`,
})
export class TextPage {
  text = 'Smart Ideal World Job interview!';
}
