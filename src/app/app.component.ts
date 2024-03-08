import { Component } from '@angular/core';

import { SongsFavouritesComponent } from './songs/components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './songs/components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './songs/components/songs-playlist/songs-playlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
})
export class AppComponent {}
