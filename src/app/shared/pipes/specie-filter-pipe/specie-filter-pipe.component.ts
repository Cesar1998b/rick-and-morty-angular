import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

    transform(items: any, select?: any): any {
        return select !== '' && select !== 'None' ? items.filter((item: any) => item.status === select) : items;
    }
}
