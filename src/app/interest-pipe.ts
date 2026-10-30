import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interest',
})
export class InterestPipe implements PipeTransform {
  transform(value: number, interestRate = 0.01): number | null {
    if (typeof value === 'undefined') {
      return null;
    }
    return value * interestRate;
  }
}
