import { booleanAttribute, Component, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-reading-goal',
  styleUrl: './reading-goal.css',
  templateUrl: './reading-goal.html',
})
export class ReadingGoal {
  readonly weeklyMinutes = input(0, { transform: numberAttribute });
  readonly showReminder = input(false, { transform: booleanAttribute });
}
