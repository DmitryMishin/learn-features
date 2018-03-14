import { Component } from '@angular/core';
import { FeaturesService } from "../../services/features.service";
import { FeatureModel } from "../../models/feature.model";

@Component({
  selector: 'fd-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.styl']
})
export class FeaturesComponent {
  public query: string = '';

  constructor(private featuresService: FeaturesService) {
  }

  public get features() {
    return this.featuresService.features;
  }

  public addFeature() {
    this.featuresService.add();
  }

  public removeFeature(features: FeatureModel) {
    this.featuresService.remove(features);
  }
}
