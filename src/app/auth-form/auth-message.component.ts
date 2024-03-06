import { Component } from '@angular/core';

@Component({
  selector: 'auth-message',
  standalone: true,
  imports: [],
  template: ` <div>You will be logged in for {{ days }} days</div> `,
  styles: ``,
})
export class AuthMessageComponent {
  days: number = 7;
}
