import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featureFilter'
})
export class FeatureFilterPipe implements PipeTransform {
  transform(value: any, query: string): any {
    if (!value) {
      return value;
    }

    query = query.toLowerCase();

    return value
      .filter(item => item.title.toLowerCase().indexOf(query) >= 0
        || item.description.toLowerCase().indexOf(query) >= 0);
  }
}
