import { Component } from '@angular/core';
import { ProjectCard } from './project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-content-projection',
  styleUrl: './content-projection.css',
  templateUrl: './content-projection.html',
})
export class ContentProjection {}
