import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-layout-page',
  imports: [CardModule, PanelModule, TagModule],
  templateUrl: './layout-page.html',
  styleUrl: './layout-page.css',
})
export class LayoutPage {}
