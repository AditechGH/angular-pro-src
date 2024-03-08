import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [{ provide: 'api', useValue: 'api/pizzas' }],
};
