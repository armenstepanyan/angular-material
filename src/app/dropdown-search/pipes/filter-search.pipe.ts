import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, optionLabel: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item[optionLabel].toLowerCase().includes(searchText);
    });
  }

}
