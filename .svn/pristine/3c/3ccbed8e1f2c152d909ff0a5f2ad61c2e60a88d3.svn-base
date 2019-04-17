import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeFormatter'
})
export class TimeFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null) {
      return null;
    }
    const valueString = value.toString();
    const milliseconds = valueString.substr(valueString.indexOf('.')).substr(0, 4);
    const date = new Date(null);
    date.setSeconds(value);
    const utcDate = date.toUTCString();
    const timeString = utcDate.substr(utcDate.indexOf(':') - 2, 8);
    if (args && JSON.parse(args)) {
      return ((timeString.substr(0, 2) === '00') ? timeString.substr(3) : timeString).concat(milliseconds);
    }
    return (timeString.substr(0, 2) === '00') ? timeString.substr(3) : timeString;
  }

}
