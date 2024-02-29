import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  PreloadingStrategy,
  Route,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { routes } from './app.routes';
import { FOOD_STORE_CONFIG } from './foodstore/config';
import { FoodStoreService } from './foodstore/foos-store.service';


export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? fn() : of(null);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes, withPreloading(CustomPreload)),
    CustomPreload,
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
