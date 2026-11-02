import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';

@Component({ selector: 'app-layout-page', imports: [CardModule, PanelModule, TagModule], template: `
  <section><h2>PrimeNG components: Card, Panel and Tag</h2><div class="grid"><p-card header="Card"><p>Use cards for concise content groups.</p><p-tag value="New" severity="info"></p-tag></p-card><p-panel header="Panel"><p>Panels expose a clear heading and content area.</p></p-panel></div></section>`, styles: [`.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; }`]
})
export class LayoutPage {}
