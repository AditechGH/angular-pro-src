import { Component } from '@angular/core';

import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

import { User } from '../../model/user.model';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [AuthFormComponent],
  template: `
    <div class="auth-page">
    <auth-form 
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join us
        </button>
      </auth-form>
      <auth-form 
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `,
  styles: [
    `
      .auth-page {
        display: flex;
      }
    `,
  ],
})
export class AuthPageComponent {
  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
