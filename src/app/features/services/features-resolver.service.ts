import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FeatureModel } from '../models/feature.model';
import { FeaturesService } from './features.service';

@Injectable()
export class FeaturesResolverService implements Resolve<FeatureModel[]> {
  constructor(private featuresService: FeaturesService) { }

  resolve() {
    return this.featuresService.fetchFeatures();
  }
}
