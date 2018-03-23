import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { FeaturesComponent } from './containers/features/features.component';
import { FeaturesService } from "./services/features.service";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OpenSearchDirective } from './directives/open-search.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesPipe } from './pipes/features.pipe';
import { AddFeatureComponent } from './containers/add-feature/add-feature.component';
import { FeatureFormComponent } from './components/feature-form/feature-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FeaturesRouterModule } from './features-router.module';
import { FeaturesResolverService } from './services/features-resolver.service';

const exportedComponents = [
  FeaturesComponent,
  AddFeatureComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FeaturesRouterModule,
  ],
  declarations: [
    exportedComponents,
    FeatureItemComponent,
    SearchBarComponent,
    OpenSearchDirective,
    FeaturesPipe,
    FeatureFormComponent,
  ],
  exports: [
    exportedComponents,
  ],
  providers: [
    FeaturesService,
    FeaturesResolverService,
  ]
})
export class FeaturesModule {
}
