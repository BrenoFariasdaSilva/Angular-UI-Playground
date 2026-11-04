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
    { name: 'Mechanical keyboard', category: 'Accessories', price: 140 },
    { name: 'Webcam', category: 'Accessories', price: 75 },
    { name: 'USB-C hub', category: 'Accessories', price: 65 },
    { name: 'Ultrawide monitor', category: 'Displays', price: 580 },
    { name: 'Desk lamp', category: 'Office', price: 42 },
    { name: 'Ergonomic chair', category: 'Office', price: 410 },
    { name: 'Notebook', category: 'Stationery', price: 12 },
    { name: 'Pen set', category: 'Stationery', price: 18 },
    { name: 'External SSD', category: 'Storage', price: 130 },
  ];
}
