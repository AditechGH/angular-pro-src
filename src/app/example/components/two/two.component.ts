import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../model/user.model';

@Component({
  selector: 'example-two',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [],
  template: `
    <div class="example-two">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}

      <button (click)="update()">Internal update</button>
      <p>* should update</p>
    </div>
  `,
  styles: [
    `
      .example-two {
        font-size: 19px;
        margin-bottom: 10px;
      }
    `,
  ],
})
export class TwoComponent {
  @Input() user!: User;

  update() {
    this.user.name = 'Scott Raynor';
  }
}
