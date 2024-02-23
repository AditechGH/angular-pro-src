import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OneComponent } from '../../components/one/one.component';
import { TwoComponent } from '../../components/two/two.component';
import { User } from '../../model/user.model';

@Component({
  selector: 'example-page',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [OneComponent, TwoComponent],
  template: `
    <div>
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  `,
  styles: [
    `
      button {
        margin: 0 10px 0 0;
      }
    `,
  ],
})
export class ExamplePageComponent {
  user: User = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California',
  };

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }

  changeName() {
    this.user.name = 'Travis Barker';
  }

  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California',
    };
  }
}
