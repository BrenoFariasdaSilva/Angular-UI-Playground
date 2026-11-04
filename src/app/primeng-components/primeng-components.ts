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
    { label: 'Inputs & groups', path: 'inputs' },
    { label: 'Date picker', path: 'date-picker' },
    { label: 'List box', path: 'list-box' },
    { label: 'Slider', path: 'slider' },
    { label: 'Table', path: 'table' },
    { label: 'Feedback', path: 'feedback' },
    { label: 'Toast', path: 'toast' },
    { label: 'File upload', path: 'file-upload' },
    { label: 'Stepper', path: 'stepper' },
    { label: 'Tabs', path: 'tabs' },
    { label: 'Confirm dialog', path: 'confirm-dialog' },
    { label: 'Overlay', path: 'overlay' },
    { label: 'Layout', path: 'layout' },
    { label: 'Pagination', path: 'pagination' },
  ];
}
