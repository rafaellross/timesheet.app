import { Pipe, PipeTransform } from '@angular/core';
import { Day } from '../classes/day';

@Pipe({
  name: 'getTotalHours'
})
export class GetTotalHoursPipe implements PipeTransform {

  transform(value: Day[]): number {
    let result = 0;
    value.forEach(element => {
      result += element.End - element.Start;
    });
    return result;
    /*return value.map(item => item.End - item.Start).reduce((prev, next) => prev + next);*/
  }
}
