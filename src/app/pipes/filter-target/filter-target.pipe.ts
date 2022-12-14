import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTarget'
})
export class FilterTargetPipe implements PipeTransform {
  transform(array: any[], prop: string, target: any): any[] {
    if (!array?.length) {
      return array;
    }

    return array.filter((item) => {
      if (!item[prop]) {
        return item
      }
      if (item[prop] === target) {
        return item
      }
    });
  }
}
