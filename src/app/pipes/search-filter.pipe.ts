import { Pipe, PipeTransform } from '@angular/core';
import { IdeviceData } from '../dashboard/helper-device';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(data:IdeviceData[],text:string): any {
    text = text.toLowerCase();

    return text? data.filter( a =>
      a.label.toLowerCase().indexOf(text)!== -1 
    )
    :data;
  }

}
