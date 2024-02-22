import { Component } from '@angular/core';

import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { AuthRememberComponent } from '../../components/auth-remember/auth-remember.component';

import { User } from '../../model/user.model';
@Component({
  selector: 'auth-page',
  standalone: true,
  template: `
    <div class="auth-page">
      <auth-form (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">Join us</button>
      </auth-form>
      <auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember
          #remember
          (checked)="rememberUser($event)"
        ></auth-remember>
        <button type="submit">Login</button>
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
  imports: [AuthFormComponent, AuthRememberComponent],
})
export class AuthPageComponent {
  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }
}
