import { Component } from '@angular/core';
import { DeferredPreview } from './deferred-preview';

@Component({
  imports: [DeferredPreview],
  selector: 'app-deferrable-views',
  styleUrl: './deferrable-views.css',
  templateUrl: './deferrable-views.html',
})
export class DeferrableViews {}
