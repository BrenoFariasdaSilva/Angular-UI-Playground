import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({ selector: 'app-table-page', imports: [CurrencyPipe, TableModule], template: `
  <section><h2>PrimeNG component: p-table</h2><p>Click a column heading to sort ascending or descending.</p><p-table [value]="products" [tableStyle]="{ 'min-width': '34rem' }"><ng-template #header><tr><th pSortableColumn="name">Product <p-sort-icon field="name" /></th><th pSortableColumn="category">Category <p-sort-icon field="category" /></th><th pSortableColumn="price">Price <p-sort-icon field="price" /></th></tr></ng-template><ng-template #body let-product><tr><td>{{ product.name }}</td><td>{{ product.category }}</td><td>{{ product.price | currency }}</td></tr></ng-template></p-table></section>`
})
export class TablePage { products = [{ name: 'Wireless keyboard', category: 'Accessories', price: 89 }, { name: 'Monitor', category: 'Displays', price: 320 }, { name: 'Laptop stand', category: 'Accessories', price: 49 }]; }
