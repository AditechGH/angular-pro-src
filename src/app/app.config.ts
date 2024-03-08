import { ApplicationConfig } from '@angular/core';

import { API_TOKEN } from './token';

export const appConfig: ApplicationConfig = {
  providers: [{ provide: API_TOKEN, useValue: 'api/pizzas' }],
};
