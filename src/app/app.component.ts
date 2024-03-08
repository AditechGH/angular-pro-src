import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import { FoodStoreService } from './foodstore/food-store.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: ` <div>Food Store ({{ (store | async)?.name }})</div> `,
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
export class AppComponent {
  store = this.foodService.getStore();
  constructor(private foodService: FoodStoreService) {}
}
