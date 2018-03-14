import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { FeaturesComponent } from './containers/features/features.component';
import { FeaturesService } from "./services/features.service";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OpenSearchDirective } from './directives/open-search.directive';
import { FormsModule } from '@angular/forms';
import { FeaturesPipe } from './pipes/features.pipe';

const exportedComponents = [
  FeaturesComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    exportedComponents,
    FeatureItemComponent,
    SearchBarComponent,
    OpenSearchDirective,
    FeaturesPipe,
  ],
  exports: [
    exportedComponents,
  ],
  providers: [
    FeaturesService,
  ]
})
export class FeaturesModule {
}
