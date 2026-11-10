import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LearningTopic, RemoteDataService } from './remote-data.service';

@Component({
  imports: [FormsModule],
  selector: 'app-remote-data-explorer',
  styleUrl: './remote-data-explorer.css',
  templateUrl: './remote-data-explorer.html',
})
export class RemoteDataExplorer {
  private readonly remoteData = inject(RemoteDataService);
  readonly topics = signal<LearningTopic[]>([]);
  readonly search = signal('');
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly filteredTopics = computed(() => {
    const query = this.search().trim().toLowerCase();

    return this.topics().filter(
      (topic) =>
        !query ||
        [topic.title, topic.category, topic.description].some((value) =>
          value.toLowerCase().includes(query),
        ),
    );
  });

  constructor() {
    this.loadTopics();
  }

  loadTopics(): void {
    this.loading.set(true);
    this.error.set(false);

    this.remoteData.getTopics().subscribe({
      next: (topics) => this.topics.set(topics),
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
      complete: () => this.loading.set(false),
    });
  }
}
