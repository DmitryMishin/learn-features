import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './containers/features/features.component';
import { AddFeatureComponent } from './containers/add-feature/add-feature.component';
import { FeaturesResolverService } from './services/features-resolver.service';

const routes: Routes = [
  {
    path: 'features',
    component: FeaturesComponent,
    data: {
      title: 'Title 1'
    },
    resolve: {
      features: FeaturesResolverService
    },
  },
  {
    path: 'feature/add',
    component: AddFeatureComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class FeaturesRouterModule {
}
