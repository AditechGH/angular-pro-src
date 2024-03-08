import { AsyncPipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SongsService } from '../../services/songs.service';

import { Store } from '../../../store';
@Component({
  selector: 'songs-favourites',
  standalone: true,
  imports: [NgForOf, AsyncPipe],
  template: ` <div class="songs">
    <div *ngFor="let item of favourites$ | async">
      {{ item.artist }}
      {{ item.track }}
    </div>
  </div>`,
})
export class SongsFavouritesComponent implements OnInit {
  favourites$!: Observable<any>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.favourites$ = this.store.select('playlist');
  }
}
