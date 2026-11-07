import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-misc',
  styleUrl: './misc.css',
  templateUrl: './misc.html',
})
export class Misc {
  readonly navigation = [
    { label: 'Bindings', path: 'bindings' },
    { label: 'Control flow', path: 'control-flow' },
    { label: 'Data binding', path: 'data-binding' },
    { label: 'Events', path: 'events' },
    { label: 'Interpolation', path: 'interpolation' },
    { label: 'Price', path: 'price' },
  ];
}
