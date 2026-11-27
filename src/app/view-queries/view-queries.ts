import { Component, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-view-queries',
  styleUrl: './view-queries.css',
  templateUrl: './view-queries.html',
})
export class ViewQueries {
  readonly searchTerm = signal('');
  private readonly searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');

  focusSearch(): void {
    this.searchInput().nativeElement.focus();
  }

  clearSearch(): void {
    this.searchTerm.set('');
    this.focusSearch();
  }
}
