import {
  Component,
  DestroyRef,
  ElementRef,
  AfterViewInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Component({
  styleUrl: './rxjs-page.css',
  template: `<section class="rxjs-page">
    <h2>fromEvent: button clicks</h2>
    <p><code>fromEvent()</code> creates an observable from events emitted by a DOM element.</p>
    <p>Each click below becomes an emitted value in the <code>clicks$</code> stream.</p>
    <button #button type="button">Click me</button>
    <p>Clicks received: {{ clickCount() }}</p>
  </section>`,
})
export class FromEventPage implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('button') private button!: ElementRef<HTMLButtonElement>;

  readonly clickCount = signal(0);

  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.clickCount.update((count) => count + 1));
  }
}
