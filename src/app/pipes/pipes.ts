import { Component } from '@angular/core';

// Built-in pipes format dates, numbers, currency, text, and objects in the template.
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { InterestPipe } from '../interest-pipe';

@Component({
  imports: [CurrencyPipe,
    DatePipe,
    DecimalPipe,
    JsonPipe,
    LowerCasePipe,
    PercentPipe,
    SlicePipe,
    TitleCasePipe,
    UpperCasePipe,
    InterestPipe],
  selector: 'app-pipes',
  styleUrl: './pipes.css',
  templateUrl: './pipes.html',
})
export class Pipes {
  // built-in Angular pipes.
  readonly today = new Date();
  readonly completionRate = 0.8235;
  readonly quantity = 12345.6789;
  readonly sampleText = 'Smart Ideal World Job interview!';
  readonly exampleObject = { framework: 'Angular', feature: 'Pipes' };

  transactions = [
    {
      date: '2026-10-31',
      amount: 10,
    },
    {
      date: '2026-11-01',
      amount: 20,
    },
    {
      date: '2026-11-02',
      amount: 40,
    },
    {
      date: '2026-11-03',
      amount: 50,
    }
  ];
}
