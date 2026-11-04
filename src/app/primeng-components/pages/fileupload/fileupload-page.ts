import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-fileupload-page',
  imports: [FileUploadModule, ImageModule],
  styleUrl: './fileupload-page.css',
  templateUrl: './fileupload-page.html',
})
export class FileuploadPage {}
