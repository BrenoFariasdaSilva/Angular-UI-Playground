import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { PaginatorState } from 'primeng/types/paginator';

@Component({
  selector: 'app-pagination-page',
  imports: [PaginatorModule],
  templateUrl: './pagination-page.html',
  styleUrl: './pagination-page.css',
})
export class PaginationPage {
  first = 0;
  rows = 4;

  readonly lessons = [
    'Standalone components',
    'Lazy-loaded routes',
    'Signals',
    'Reactive forms',
    'Control flow',
    'Pipes',
    'Route guards',
    'RxJS streams',
    'PrimeNG themes',
    'Accessibility',
    'Responsive layouts',
    'Component testing',
  ];

  get visibleLessons() {
    return this.lessons.slice(this.first, this.first + this.rows);
  }

  changePage({ first = 0, rows = this.rows }: PaginatorState) {
    this.first = first;
    this.rows = rows;
  }
}
