import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturesModule } from "./features/features.module";
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    AppRouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
