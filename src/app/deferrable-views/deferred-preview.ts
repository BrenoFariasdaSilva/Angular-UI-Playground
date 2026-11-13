import { Component } from '@angular/core';

@Component({
  selector: 'app-deferred-preview',
  styleUrl: './deferred-preview.css',
  template: `
    <article class="preview-card">
      <p class="preview-label">Deferred component loaded</p>
      <h3>Bundle insight</h3>
      <p>
        This standalone component was not needed for the first render. Angular fetched and rendered
        it only after you interacted with the placeholder.
      </p>
      <div class="preview-bars" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    </article>
  `,
})
export class DeferredPreview {}
