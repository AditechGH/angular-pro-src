import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';


interface Pizza {
  name: string;
  price: number;
}

export function PizzaFactory(http: HttpClient) {
  return new FoodService(http, '/api/pizzas');
}

@Component({
  selector: 'pizza-viewer',
  standalone: true,
  imports: [NgForOf, AsyncPipe, CurrencyPipe],
  providers: [
    {
      provide: FoodService,
      useFactory: PizzaFactory,
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
export class PizzaViewerComponent implements OnInit {
  items$!: Observable<Pizza[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.items$ = this.foodService.getFood();
  }
}