import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-fileupload-page',
  imports: [FileUploadModule],
  styleUrl: './fileupload-page.css',
  templateUrl: './fileupload-page.html',
})
export class FileuploadPage {}
