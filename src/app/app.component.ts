import { Component } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthFormComponent],
  template: `
    <div>
      <auth-form (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">Join us</button>
      </auth-form>
      <auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <button type="submit">Login</button>
      </auth-form>
    </div>
  `,
})
export class AppComponent {
  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
