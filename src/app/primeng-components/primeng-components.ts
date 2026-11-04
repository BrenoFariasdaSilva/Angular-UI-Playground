import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [ButtonModule, DrawerModule, RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-primeng-components',
  styleUrl: './primeng-components.css',
  templateUrl: './primeng-components.html',
})
export class PrimengComponents {
  drawerVisible = false;

  readonly navigation = [
    { label: 'Buttons', path: 'buttons' },
    { label: 'Confirm dialog', path: 'confirm-dialog' },
    { label: 'Date picker', path: 'date-picker' },
    { label: 'Feedback', path: 'feedback' },
    { label: 'File upload', path: 'file-upload' },
    { label: 'Inputs & groups', path: 'inputs' },
    { label: 'Layout', path: 'layout' },
    { label: 'List box', path: 'list-box' },
    { label: 'Overlay', path: 'overlay' },
    { label: 'Pagination', path: 'pagination' },
    { label: 'Slider', path: 'slider' },
    { label: 'Stepper', path: 'stepper' },
    { label: 'Table', path: 'table' },
    { label: 'Tabs', path: 'tabs' },
    { label: 'Toast', path: 'toast' },
  ];
}
