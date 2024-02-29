import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
  constructor(private http: HttpClient) {}

  getSides(): Observable<any> {
    return this.http.get('/api/sides');
  }
  getPizzas(): Observable<any> {
    return this.http.get('/api/pizzas');
  }
  getDrinks(): Observable<any> {
    return this.http.get('/api/drinks');
  }
}
