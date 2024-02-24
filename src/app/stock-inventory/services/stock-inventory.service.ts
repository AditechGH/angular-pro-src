import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

import { Stock } from '../models/stock.interface';
import { Product } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems() {
    return this.http
      .get<Stock[]>(`/api/cart`)
      .pipe(catchError((err) => throwError(() => new Error(err.message))));
  }

  getProducts() {
    return this.http
      .get<Product[]>(`/api/products`)
      .pipe(catchError((err) => throwError(() => new Error(err.message))));
  }
}
