import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../model/user.model';

@Component({
  selector: 'example-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  template: `
    <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}

      <button (click)="update()">Internal update</button>
      <p>* should not update</p>
    </div>
  `,
  styles: [
    `
      .example-one {
        font-size: 19px;
        margin-bottom: 10px;
      }
    `,
  ],
})
export class OneComponent {
  @Input() user!: User;

  update() {
    this.user.name = 'Matt Skiba';
  }
}
