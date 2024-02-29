import { ApplicationConfig } from '@angular/core';

import { Store } from './store/store';

export const appConfig: ApplicationConfig = {
  providers: [
    Store
  ],
};
