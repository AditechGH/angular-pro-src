import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Song } from '../../services/songs.service';

@Component({
  selector: 'songs-list',
  standalone: true,
  imports: [NgForOf],
  template: `
    <div class="songs-list">
      <h3>
        <ng-content></ng-content>
      </h3>
      <ul>
        <li *ngFor="let item of list; index as i">
          <p>{{ item.artist }}</p>
          <span>{{ item.track }}</span>
          <div
            class="songs-list__favourite"
            [class.active]="item.favourite"
          ></div>
          <div
            class="songs-list__listened"
            [class.active]="item.listened"
          ></div>
        </li>
      </ul>
    </div>
  `,
  styleUrl: 'songs-list.component.scss',
})
export class SongsListComponent {
  @Input() 
  list!: Song[];
}
