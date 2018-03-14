import { Pipe, PipeTransform } from '@angular/core';
import { FeatureModel } from "../models/feature.model";

@Pipe({
  name: 'features',
  pure: false
})
export class FeaturesPipe implements PipeTransform {
  transform(value: FeatureModel[], query: string): FeatureModel[] {
    if (!value) {
      return;
    }

    query = query.toLowerCase();

    return value.filter(item =>
      item.title.toLowerCase().indexOf(query) >= 0 || item.description.toLowerCase().indexOf(query) >= 0);
  }
}
