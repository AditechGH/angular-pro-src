import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

import { Store } from './store';
import { SongsFavouritesComponent } from './songs/components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './songs/components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './songs/components/songs-playlist/songs-playlist.component';

@Component({
  selector: 'store',
  standalone: true,
  imports: [
    // common
    NgForOf,
    AsyncPipe,

    // containers
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
  ],
  template: `
    <div>
      <songs-playlist></songs-playlist>
      <songs-listened></songs-listened>
      <songs-favourites></songs-favourites>
    </div>
  `,
  styles: [``],
})
export class StoreComponent {
  todos$ = this.store.select<any>('todos');

  constructor(private store: Store) {
    this.store.set('todos', [
      { id: 1, name: 'Eat dinner' },
      { id: 2, name: 'Do washing' },
    ]);
  }
}
