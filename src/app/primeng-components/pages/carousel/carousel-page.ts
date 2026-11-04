import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-carousel-page',
  imports: [CarouselModule, FileUploadModule],
  templateUrl: './carousel-page.html',
  styleUrl: './carousel-page.css',
})
export class CarouselPage {
  images: { name: string; url: string }[] = [];

  addImages(event: FileSelectEvent) {
    this.images = Array.from(event.files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
  }
}
