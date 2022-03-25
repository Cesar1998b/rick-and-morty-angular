import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

    transform(items: any, sel?: any): any {
        return sel !== '' && sel !== 'All' ? items.filter((item: any) => item.species === sel) : items;
    }
}
