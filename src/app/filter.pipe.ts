import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // we can force to pipe to be updated whenever the data changes by adding
  // a second property to the pipe
})
  
export class FilterPipe implements PipeTransform {

  transform(value:any, filterString: string, propName: string): any {
    if (value.length === 0) {
      return value;
    }
    for (const item of value) {
      const resultArray = [];
      if (item[propName] === filterString) {
         resultArray.push(item)
      }
      return resultArray;
     }

  }

}
