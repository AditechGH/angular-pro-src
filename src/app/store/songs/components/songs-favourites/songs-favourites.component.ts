import { Component } from '@angular/core';

import { Store } from '../../../store';

@Component({
  selector: 'songs-favourites',
  standalone: true,
  imports: [],
  template: ` <div class="songs">Favourites</div> `,
})
export class SongsFavouritesComponent {
  constructor(private store: Store) {}
}
