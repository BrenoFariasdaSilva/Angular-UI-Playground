import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({ selector: 'app-buttons-page', imports: [ButtonModule], template: `
  <section><h2>PrimeNG component: Button</h2><p>Actions with different visual emphasis.</p><div class="examples">
    <button pButton label="Primary"></button><button pButton label="Secondary" severity="secondary"></button>
    <button pButton label="Success" severity="success"></button><button pButton label="Outlined" variant="outlined"></button>
  </div></section>`, styles: [`.examples { display:flex; flex-wrap:wrap; gap: .75rem; } h2 { margin-bottom:.25rem; }`]
})
export class ButtonsPage {}
