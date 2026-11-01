import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({ selector: 'app-slider-page', imports: [FormsModule, SliderModule], template: `
  <section><h2>PrimeNG component: Slider</h2><p>Drag to set a value: <strong>{{ value }}</strong></p><p-slider [(ngModel)]="value" [style]="{ width: '20rem' }"></p-slider></section>`
})
export class SliderPage { value = 40; }
