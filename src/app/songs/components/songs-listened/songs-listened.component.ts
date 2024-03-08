import { Component } from '@angular/core';

import { Store } from '../../../store';

@Component({
  selector: 'songs-listened',
  standalone: true,
  imports: [],
  template: ` <div class="songs">Listened</div> `,
})
export class SongsListenedComponent {
  constructor(private store: Store) {}
}
