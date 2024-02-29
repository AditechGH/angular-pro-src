import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '../../store';
import { tap } from 'rxjs';

@Injectable()
export class SongsService {
  getPlaylist$ = this.http
    .get('/api/playlist')
    .pipe(tap((next) => this.store.set('playlist', next)));

  constructor(private http: HttpClient, private store: Store) {}
}
