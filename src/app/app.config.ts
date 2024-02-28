import { ApplicationConfig } from '@angular/core';
import {
  PreloadingStrategy,
  Route,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { Observable, of } from 'rxjs';
import { API_TOKEN } from './token';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? fn() : of(null);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(CustomPreload)),
    CustomPreload,
    { provide: API_TOKEN, useValue: 'api/pizzas' },
  ],
};
