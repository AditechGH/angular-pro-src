import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../../food.service';


interface Drink {
  name: string;
  price: number;
}

export function DrinkFactory(http: HttpClient) {
  return new FoodService(http, '/api/drinks');
}

@Component({
  selector: 'drink-viewer',
  standalone: true,
  imports: [NgForOf, AsyncPipe, CurrencyPipe],
  providers: [
    {
      provide: FoodService,
      useFactory: DrinkFactory,
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
  styles: [``],
})
export class DrinkViewerComponent implements OnInit {
  items$!: Observable<Drink[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.items$ = this.foodService.getFood();
  }
}
