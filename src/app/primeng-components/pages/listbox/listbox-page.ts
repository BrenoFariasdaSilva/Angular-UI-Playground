import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

@Component({ selector: 'app-listbox-page', imports: [FormsModule, ListboxModule], template: `
  <section><h2>PrimeNG component: Listbox</h2><p>Select a city from a keyboard-accessible list.</p><p-listbox [options]="cities" [(ngModel)]="selected" optionLabel="name" [style]="{ width: '20rem' }"></p-listbox>
  <p>Selected: {{ selected?.name || 'None' }}</p></section>`
})
export class ListboxPage { cities = [{ name: 'São Paulo' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'New York' }]; selected = this.cities[0]; }
