import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({ selector: 'app-inputs-page', imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, TextareaModule], template: `
  <section><h2>PrimeNG component: InputGroup</h2><p>Inputs can be composed with labels and addons.</p>
  <div class="stack"><p-inputgroup><p-inputgroup-addon>https://</p-inputgroup-addon><input pInputText [(ngModel)]="website" aria-label="Website" /></p-inputgroup>
  <textarea pTextarea [(ngModel)]="note" rows="4" aria-label="Notes"></textarea></div></section>`, styles: [`.stack { display:grid; gap:1rem; max-width:38rem; } textarea { width:100%; }`]
})
export class InputsPage { website = 'primeng.dev'; note = 'PrimeNG input text and textarea examples.'; }
