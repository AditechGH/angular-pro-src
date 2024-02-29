import { Component } from '@angular/core';

import { FoodstoreComponent } from './foodstore/foodstore.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodstoreComponent],
  template: `
    <div>
      <foodstore></foodstore>
    </div>
  `,
  styles: [
    `
      pizza-viewer,
      side-viewer,
      drink-viewer {
        display: block;
        border-bottom: 2px solid #eee;
        padding: 20px 0;
      }
    `,
  ],
})
export class AppComponent {}
