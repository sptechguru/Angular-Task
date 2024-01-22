import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numericFormatter'
})
export class NumericFormatterPipe implements PipeTransform {

  transform(value: number, format: string): string {
    switch (format) {
      case 'Y':
        return `${value} Yrs`;
      case 'D':
        return `${value} In Days`;
      case '₹':
        return `₹ ${value} Lakhs`;
      default:
        return `${value}`;
    }
  }


}
