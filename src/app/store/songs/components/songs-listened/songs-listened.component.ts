import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

import { Store } from '../../../store';
import { Song, SongsService } from '../../services/songs.service';

import { SongsListComponent } from '../songs-list/songs-list.component';

@Component({
  selector: 'songs-listened',
  standalone: true,
  imports: [AsyncPipe, SongsListComponent],
  template: `
    <div class="songs">
      <songs-list [list]="listened$ | async" (toggle)="onToggle($event)"> Played</songs-list>
    </div>
  `,
})
export class SongsListenedComponent implements OnInit {
  listened$!: Observable<any>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.listened$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map((playlist: any) => playlist.filter((track: Song) => track.listened))
    );
  }

  onToggle(event: any) {
    this.songsService.toggle(event);
  }
}
