import { Injectable } from '@angular/core';

export interface UserProfile {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
}

@Injectable({ providedIn: 'root' })
export class UserDirectoryService {
  readonly users: readonly UserProfile[] = [
    {
      id: 'ada',
      name: 'Ada Lovelace',
      role: 'Frontend Engineer',
      location: 'London, UK',
      bio: 'Builds thoughtful interfaces and enjoys exploring new browser capabilities.',
    },
    {
      id: 'linus',
      name: 'Linus Torres',
      role: 'Product Designer',
      location: 'São Paulo, Brazil',
      bio: 'Turns product questions into clear, accessible interface decisions.',
    },
    {
      id: 'mira',
      name: 'Mira Patel',
      role: 'QA Engineer',
      location: 'Bengaluru, India',
      bio: 'Tests user journeys and looks for the small details that make them reliable.',
    },
  ];

  getUser(id: string | null): UserProfile | undefined {
    return this.users.find((user) => user.id === id);
  }
}
