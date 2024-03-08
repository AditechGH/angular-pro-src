import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { map } from 'rxjs';
import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';

export interface Store {
  id: number;
  name: string;
  token: string;
}

@Injectable()
export class FoodStoreService {
  constructor(
    private http: HttpClient,
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
  ) {}

  getStore() {
    const headers = new HttpHeaders({
      id: this.config.storeId,
      token: this.config.storeToken,
    });

    return this.http
      .get<Store[]>(`/api/stores`, { headers })
      .pipe(map((response) => response[0]));
  }
}
