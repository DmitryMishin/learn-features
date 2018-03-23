import { Injectable } from '@angular/core';
import { FeatureModel } from '../models/feature.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeaturesService {
  public features: FeatureModel[] = [
    { title: 'Test feature1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'Test feature2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'Test feature3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'Test feature4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { title: 'Test feature5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  ];

  constructor(private http: HttpClient) {
  }

  public fetchFeatures(): Observable<FeatureModel[]> {
    return this.http.get('http://localhost:3000/features').pipe(
      map((res) => {
        return <FeatureModel[]> res;
      })
    )
  }

  public createFeature(model: FeatureModel) {
    return this.http.post('http://localhost:3000/feature', model);
  }

  private random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  public add() {
    const startIndex = this.random(0, 50);
    const endIndex = startIndex + this.random(20, 40);

    this.features.push({ title: `Test feature${this.features.length + 1}`, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies sapien sed ornare fringilla. Quisque eget nisl maximus est bibendum sodales posuere et nunc. Duis sollicitudin nunc in bibendum vehicula. Donec posuere molestie scelerisque. In vitae tellus mi. Phasellus at pulvinar dolor. Suspendisse placerat laoreet ligula vitae iaculis. Nullam elementum diam vel sollicitudin blandit. Integer tristique scelerisque lobortis. Integer facilisis elit vitae scelerisque tempus. Nunc eleifend malesuada sollicitudin. Aliquam erat volutpat. Duis quis tortor eu leo mollis rhoncus et id nulla. Nullam porta scelerisque mi consequat accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'.slice(startIndex, endIndex) });
    // this.features = [...this.features, { title: `Test feature{this.features.length + 1}`, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies sapien sed ornare fringilla. Quisque eget nisl maximus est bibendum sodales posuere et nunc. Duis sollicitudin nunc in bibendum vehicula. Donec posuere molestie scelerisque. In vitae tellus mi. Phasellus at pulvinar dolor. Suspendisse placerat laoreet ligula vitae iaculis. Nullam elementum diam vel sollicitudin blandit. Integer tristique scelerisque lobortis. Integer facilisis elit vitae scelerisque tempus. Nunc eleifend malesuada sollicitudin. Aliquam erat volutpat. Duis quis tortor eu leo mollis rhoncus et id nulla. Nullam porta scelerisque mi consequat accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'.slice(startIndex, endIndex) }];
  }

  public remove(id: number) {
    return this.http.delete(`http://localhost:3000/feature/${id}`);
    // const index = this.features.indexOf(features);
    //
    // if (index >= 0) {
    //   this.features.splice(index, 1)
    //   // this.features = this.features.filter((item, i) => index !== i);
    // }
  }
}
