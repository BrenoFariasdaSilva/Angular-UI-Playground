import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({ selector: 'app-overlay-page', imports: [ButtonModule, DialogModule], template: `
  <section><h2>PrimeNG component: p-dialog</h2><p>Overlay content that keeps the user in context.</p><button pButton (click)="visible = true"><span pButtonLabel>Open dialog</span></button><p-dialog header="Example dialog" [(visible)]="visible" [modal]="true" [style]="{ width: '28rem' }"><p>This is a PrimeNG dialog component.</p></p-dialog></section>`
})
export class OverlayPage { visible = false; }
