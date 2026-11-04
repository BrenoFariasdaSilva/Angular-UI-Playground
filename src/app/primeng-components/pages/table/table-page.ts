import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-page',
  imports: [CurrencyPipe, TableModule],
  templateUrl: './table-page.html',
})
export class TablePage {
  products = [
    { name: 'Wireless keyboard', category: 'Accessories', price: 89 },
    { name: 'Monitor', category: 'Displays', price: 320 },
    { name: 'Laptop stand', category: 'Accessories', price: 49 },
  ];
}
