import { Component } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-feedback-page',
  imports: [MessageModule, ProgressBarModule],
  templateUrl: './feedback-page.html',
})
export class FeedbackPage {}
