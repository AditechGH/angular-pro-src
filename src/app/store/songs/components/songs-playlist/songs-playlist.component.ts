import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';

import { SongsListComponent } from '../songs-list/songs-list.component';

@Component({
  selector: 'songs-playlist',
  standalone: true,
  imports: [AsyncPipe, SongsListComponent],
  template: `
    <div class="songs">
    <songs-list [list]="playlist$ | async" (toggle)="onToggle($event)"> Playlist</songs-list>
    </div>
  `,
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$!: Observable<any>;
  subscription!: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  onToggle(event: any) {
    this.songsService.toggle(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
