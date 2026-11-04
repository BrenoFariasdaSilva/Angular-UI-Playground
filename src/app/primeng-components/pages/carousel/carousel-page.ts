import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel-page',
  imports: [CarouselModule],
  templateUrl: './carousel-page.html',
  styleUrl: './carousel-page.css',
})
export class CarouselPage {
  readonly highlights = [
    { title: 'Plan', description: 'Organize upcoming work into clear priorities.' },
    { title: 'Build', description: 'Turn the selected plan into a focused implementation.' },
    { title: 'Review', description: 'Validate the result before sharing it with others.' },
    { title: 'Ship', description: 'Release the finished work with confidence.' },
  ];
}
