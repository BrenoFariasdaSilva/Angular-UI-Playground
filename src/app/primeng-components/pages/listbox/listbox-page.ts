import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-listbox-page',
  imports: [FormsModule, ListboxModule],
  templateUrl: './listbox-page.html',
})
export class ListboxPage {
  cities = [{ name: 'São Paulo' }, { name: 'Portugal' }, { name: 'Tokyo' }, { name: 'New York' }];
  selected = this.cities[0];
}
