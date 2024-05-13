import { Pipe, PipeTransform } from '@angular/core';

export {Pipe} from '@angular/core';


@Pipe({
   name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, charector: string) {
    return  value.replace(charector, ' ');
  }


}
