import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '../../store';
import { tap } from 'rxjs';

export interface Song {
  [key: string]: any;
  id: number;
  artist: string;
  track: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {
  getPlaylist$ = this.http
    .get<Song[]>('/api/playlist')
    .pipe(tap((next) => this.store.set('playlist', next)));

  constructor(private http: HttpClient, private store: Store) {}

  toggle(event: any) {
    this.http
    .put<Song>(`/api/playlist/${event.track.id}`, event.track)
    .subscribe((track) => {
      
      const value = this.store.value.playlist;

      const playlist = value.map((song: Song) => {
        if (event.track.id === song.id) {
          return { ...song, ...event.track };
        } else {
          return song;
        }
      });

      this.store.set('playlist', playlist);

    });
  }
}
