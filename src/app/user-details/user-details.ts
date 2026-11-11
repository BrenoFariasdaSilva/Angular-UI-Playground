import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDirectoryService, UserProfile } from './user-directory.service';

@Component({
  imports: [RouterLink],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails {
  private readonly directory = inject(UserDirectoryService);
  readonly id = input.required<string>();
  readonly user = input.required<UserProfile>();
  readonly users = this.directory.users;
}
