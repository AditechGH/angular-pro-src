import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { SongsService } from './store/songs/services/songs.service';
import { Store } from './store/store';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule), Store, SongsService],
};
