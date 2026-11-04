import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-datepicker-page',
  imports: [DatePipe, FormsModule, DatePickerModule],
  templateUrl: './datepicker-page.html',
})
export class DatepickerPage {
  date = new Date();
}
