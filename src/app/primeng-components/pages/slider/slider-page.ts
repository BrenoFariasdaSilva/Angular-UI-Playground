import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-slider-page',
  imports: [FormsModule, SliderModule],
  templateUrl: './slider-page.html',
})
export class SliderPage {
  value = 40;
}
