import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { Product } from '../models/product.interface';
import { StockItem } from '../models/stock-item.interface';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems() {
    return this.http
      .get<StockItem[]>(`/api/cart`)
      .pipe(catchError((err) => throwError(() => new Error(err.message))));
  }

  getProducts() {
    return this.http
      .get<Product[]>(`/api/products`)
      .pipe(catchError((err) => throwError(() => new Error(err.message))));
  }
}