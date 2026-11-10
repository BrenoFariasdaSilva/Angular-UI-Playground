import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LearningTopic {
  id: number;
  title: string;
  category: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class RemoteDataService {
  private readonly http = inject(HttpClient);

  getTopics() {
    return this.http.get<LearningTopic[]>('data/angular-learning-topics.json');
  }
}
