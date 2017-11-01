import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToHour'
})
export class ConvertToHourPipe implements PipeTransform {

  transform(value: number): string {
    function D(J){ 
      return (J<10? '0':'') + J;
  };
  return D(value/60 | 0) + ':' + D(value%60);  
 }
}