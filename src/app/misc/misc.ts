import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-misc',
  styleUrl: './misc.css',
  templateUrl: './misc.html',
})
export class Misc {
  readonly navigation = [
    { label: 'Bindings', path: 'bindings' },
    { label: 'Control flow', path: 'control-flow' },
    { label: 'Events', path: 'events' },
    { label: 'Interpolation', path: 'interpolation' },
    { label: 'Price & data', path: 'price' },
  ];
}
