import { Component } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({ selector: 'app-feedback-page', imports: [MessageModule, ProgressBarModule], template: `
  <section><h2>PrimeNG components: p-message and p-progressbar</h2><p-message severity="success">Your changes have been saved.</p-message><br><p-message severity="warn">Review this before publishing.</p-message><h3>Upload progress</h3><p-progressbar [value]="68"></p-progressbar></section>`
})
export class FeedbackPage {}
