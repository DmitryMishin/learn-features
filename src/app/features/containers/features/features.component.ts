import { Component, OnInit } from '@angular/core';
import { FeaturesService } from "../../services/features.service";
import { FeatureModel } from "../../models/feature.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fd-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.styl']
})
export class FeaturesComponent implements OnInit {
  public query: string = '';
  public features;

  constructor(private featuresService: FeaturesService,
              private route: ActivatedRoute) {
    // this.updateData();
  }

  ngOnInit() {
    this.features = this.route.snapshot.data['features'];
  }

  private updateData() {
    this.featuresService.fetchFeatures()
      .subscribe(
        (res) => {
          this.features = res;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  // public get features() {
  //   return this.featuresService.features;
  // }

  public addFeature() {
    this.featuresService.add();
  }

  public removeFeature(feature: FeatureModel) {
    this.featuresService.remove(feature.id).subscribe(() => {
      this.updateData();
    });
  }
}
