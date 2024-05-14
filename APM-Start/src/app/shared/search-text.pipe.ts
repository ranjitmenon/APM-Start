import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText',
  standalone: true
})
export class SearchTextPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, keys: string = '', term: string = '') {
    console.log('value')
    if (!term) return value;
    return (value || []).filter((item: any) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])))
  }

}
