import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({ selector: 'app-buttons-page', imports: [ButtonModule], template: `
  <section><h2>PrimeNG component: p-button</h2><p>Actions with different visual emphasis.</p><div class="examples">
    <button pButton><span pButtonLabel>Primary</span></button><button pButton severity="secondary"><span pButtonLabel>Secondary</span></button>
    <button pButton severity="success"><span pButtonLabel>Success</span></button><button pButton variant="outlined"><span pButtonLabel>Outlined</span></button>
  </div></section>`, styles: [`.examples { display:flex; flex-wrap:wrap; gap: .75rem; } h2 { margin-bottom:.25rem; }`]
})
export class ButtonsPage {}
