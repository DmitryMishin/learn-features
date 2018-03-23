import { Component } from '@angular/core';

@Component({
  selector: 'fd-root',
  template: `
      <div class="wrapper">
          <!--<fd-add-feature></fd-add-feature>-->
          <!--<fd-features></fd-features>-->
          
          <a routerLink="/features">Features</a>
          <a routerLink="/feature/add">Add Feature</a>
          
          <router-outlet></router-outlet>
      </div>
  `,
  styles: []
})
export class AppComponent {
}
