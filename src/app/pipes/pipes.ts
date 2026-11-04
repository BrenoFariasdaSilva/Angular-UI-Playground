import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Built-in pipes format dates, numbers, currency, text, and objects in the template.

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-pipes',
  styleUrl: './pipes.css',
  templateUrl: './pipes.html',
})
export class Pipes {
  readonly navigation = [
    { label: 'Date', path: 'date' },
    { label: 'Numbers', path: 'numbers' },
    { label: 'Text', path: 'text' },
    { label: 'Slice & JSON', path: 'data' },
    { label: 'Interest', path: 'interest' },
  ];
}
