import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name = 'Two-way data binding';
}
