import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { MyForDirective } from './my-for/my-for.directive';
import { User } from './interface/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, MyForDirective],
  template: `
    <div>
      <ul>
        <li *myFor="let item of items; let i = index">
          {{ i }} Member: {{ item.name | json }}
        </li>
        <ng-template myFor [myForOf]="items" let-item let-i="index">
          <li>{{ i }} Member: {{ item.name | json }}</li>
        </ng-template>
      </ul>
    </div>
  `,
})
export class AppComponent {
  items: User[] = [
    {
      name: 'Mark Hoppus',
      age: 44,
      location: 'California',
    },
    {
      name: 'Tom Delonge',
      age: 41,
      location: 'California',
    },
    {
      name: 'Travis Barker',
      age: 41,
      location: 'California',
    },
  ];
  constructor() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        { name: 'Matt Skiba', age: 40, location: 'California' },
      ];
    }, 2000);
  }
}
