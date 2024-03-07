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

import { MailService } from './mail/mail.service';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? fn() : of(null);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(CustomPreload)),
    CustomPreload,
    importProvidersFrom(HttpClientModule),
    MailService,
  ],
};
