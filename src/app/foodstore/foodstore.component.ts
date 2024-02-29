import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodStoreService, Store } from './foos-store.service';

@Component({
  selector: 'foodstore',
  standalone: true,
  imports: [AsyncPipe],
  template: ` <div>Food Store ({{ (store | async)?.name }})</div> `,
  styles: [``],
})
export class FoodstoreComponent {
  store: Observable<Store> = this.foodService.getStore();
  constructor(private foodService: FoodStoreService) {}
}
