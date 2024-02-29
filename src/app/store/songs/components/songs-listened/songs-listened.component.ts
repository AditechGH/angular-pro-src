import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { Playlist } from '../../model/playlist.interface';

@Component({
  selector: 'songs-listened',
  standalone: true,
  imports: [NgForOf, AsyncPipe],
  template: `
    <div class="songs">
      <div *ngFor="let item of listened$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `,
})
export class SongsListenedComponent implements OnInit {
  listened$!: Observable<any>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.listened$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map((playlist: any) =>
        playlist.filter((track: Playlist) => track.listened)
      )
    );
  }
}
