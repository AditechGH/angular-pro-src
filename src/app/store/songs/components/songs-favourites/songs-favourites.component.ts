import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

import { Store } from '../../../store';
import { Song, SongsService } from '../../services/songs.service';
import { SongsListComponent } from '../songs-list/songs-list.component';

@Component({
  selector: 'songs-favourites',
  standalone: true,
  imports: [AsyncPipe, SongsListComponent],
  template: ` <div class="songs">
    <songs-list [list]="favourites$ | async"> Favourites</songs-list>
  </div>`,
})
export class SongsFavouritesComponent implements OnInit {
  favourites$!: Observable<any>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.favourites$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map((playlist: any) =>
        playlist.filter((track: Song) => track.favourite)
      )
    );
  }
}
