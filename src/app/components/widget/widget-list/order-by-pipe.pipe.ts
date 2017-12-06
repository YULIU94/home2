import { Pipe, PipeTransform } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<Widget>, args: string): Array<Widget> {
    array.sort((a: any, b: any) => {
      if (a.position < b.position) {
        return -1;
      } else if (a.position > b.position) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}

