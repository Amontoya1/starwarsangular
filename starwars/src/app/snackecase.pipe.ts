import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snackecase'
})
export class SnackecasePipe implements PipeTransform {


  transform(value: string): string {
    return value.split(' ').join('_').toLocaleLowerCase();
  }

}
