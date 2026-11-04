import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({ selector: 'app-table-page', imports: [CurrencyPipe, TableModule], template: `
  <section><h2>PrimeNG component: p-table</h2><p>Sortable-ready data table structure.</p><p-table [value]="products" [tableStyle]="{ 'min-width': '34rem' }"><ng-template #header><tr><th>Product</th><th>Category</th><th>Price</th></tr></ng-template><ng-template #body let-product><tr><td>{{ product.name }}</td><td>{{ product.category }}</td><td>{{ product.price | currency }}</td></tr></ng-template></p-table></section>`
})
export class TablePage { products = [{ name: 'Wireless keyboard', category: 'Accessories', price: 89 }, { name: 'Monitor', category: 'Displays', price: 320 }, { name: 'Laptop stand', category: 'Accessories', price: 49 }]; }
