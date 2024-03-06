import { Component } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-form/auth-remember.component';

import { User } from './auth-form/auth-form.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthFormComponent, AuthRememberComponent],
  template: `
    <div>
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
})
export class AppComponent {
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
