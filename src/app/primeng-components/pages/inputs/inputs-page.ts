import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-inputs-page',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, TextareaModule],
  templateUrl: './inputs-page.html',
  styleUrl: './inputs-page.css',
})
export class InputsPage {
  website = 'primeng.dev';
  note = 'PrimeNG input text and textarea examples.';
}
