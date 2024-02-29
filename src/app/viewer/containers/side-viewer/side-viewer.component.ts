import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';


interface Side {
  name: string;
  price: number;
}

export function SideFactory(http: HttpClient) {
  return new FoodService(http, '/api/sides');
}

@Component({
  selector: 'side-viewer',
  standalone: true,
  imports: [NgForOf, AsyncPipe, CurrencyPipe],
  providers: [
    {
      provide: FoodService,
      useFactory: SideFactory,
      deps: [HttpClient],
    },
  ],
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
