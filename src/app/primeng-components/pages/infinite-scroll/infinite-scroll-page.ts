import { Component } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollerLazyLoadEvent } from 'primeng/types/scroller';

type Lesson = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-infinite-scroll-page',
  imports: [ScrollerModule],
  templateUrl: './infinite-scroll-page.html',
  styleUrl: './infinite-scroll-page.css',
})
export class InfiniteScrollPage {
  lessons: (Lesson | undefined)[] = Array.from({ length: 100 });

  loadLessons({ first = 0, last = 9 }: ScrollerLazyLoadEvent) {
    const lessons = [...this.lessons];

    for (let index = first; index <= Math.min(last, lessons.length - 1); index++) {
      lessons[index] ??= {
        title: `Lesson ${index + 1}`,
        description: 'Loaded when this part of the list entered the viewport.',
      };
    }

    this.lessons = lessons;
  }
}
