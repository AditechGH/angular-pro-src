import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { FOOD_STORE_CONFIG } from './foodstore/config';
import { FoodStoreService } from './foodstore/food-store.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    FoodStoreService,
    {
      provide: FOOD_STORE_CONFIG,
      useValue: {
        storeId: 10292,
        storeToken: 'eca938c99a0e9ff91029dc',
      },
    },
  ],
};
