import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

import { Store } from './store';

@Component({
  selector: 'store',
  standalone: true,
  imports: [NgForOf, AsyncPipe],
  template: `
    <div>
      <div *ngFor="let todo of todos$ | async">
        {{ todo.name }}
      </div>
    </div>
  `,
  styles: [``] 
})
export class StoreComponent {
  todos$ = this.store.select<any[]>('todos');

  constructor(
    private store: Store
  ) {
    this.store.set('todos', [{ id: 1, name: 'Eat dinner' }, { id: 2, name: 'Do washing' }]);
  }
}
