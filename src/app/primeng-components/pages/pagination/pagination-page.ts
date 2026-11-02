import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({ selector: 'app-pagination-page', imports: [PaginatorModule], template: `
  <section><h2>PrimeNG component: Paginator</h2><p>Navigate a result set.</p><p-paginator [rows]="10" [totalRecords]="120"></p-paginator></section>`
})
export class PaginationPage {}
