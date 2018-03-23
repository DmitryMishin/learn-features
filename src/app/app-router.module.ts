import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'features',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouterModule {

}