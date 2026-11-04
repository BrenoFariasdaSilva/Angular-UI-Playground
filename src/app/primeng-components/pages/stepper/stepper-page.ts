import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-stepper-page',
  imports: [ButtonModule, StepperModule],
  templateUrl: './stepper-page.html',
})
export class StepperPage {}
