import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SongsService } from './songs/services/songs.service';

import { Store } from './store';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule), Store, SongsService],
};
