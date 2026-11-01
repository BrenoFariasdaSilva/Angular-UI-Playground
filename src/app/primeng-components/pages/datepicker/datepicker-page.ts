import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({ selector: 'app-datepicker-page', imports: [DatePipe, FormsModule, DatePickerModule], template: `
  <section><h2>PrimeNG component: DatePicker</h2><p>Choose a date from a calendar overlay.</p><p-datepicker [(ngModel)]="date" [showIcon]="true" ariaLabel="Choose a date"></p-datepicker>
  <p>Selected: {{ date | date }}</p></section>`
})
export class DatepickerPage { date = new Date(); }
