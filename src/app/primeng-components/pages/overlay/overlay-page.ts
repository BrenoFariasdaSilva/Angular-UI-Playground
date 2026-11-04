import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-overlay-page',
  imports: [ButtonModule, DialogModule],
  templateUrl: './overlay-page.html',
})
export class OverlayPage {
  visible = false;
}
