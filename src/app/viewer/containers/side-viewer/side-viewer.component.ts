import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';

interface Side {
  name: string;
  price: number;
}

@Component({
  selector: 'side-viewer',
  standalone: true,
  imports: [NgForOf, AsyncPipe, CurrencyPipe],
  providers: [FoodService],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency : 'USD' : 'symbol' }}
      </div>
    </div>
  `,
})
export class SideViewerComponent implements OnInit {
  items$!: Observable<Side[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.items$ = this.foodService.getFood();
  }
}
