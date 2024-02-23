import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthMessageComponent } from '../auth-message/auth-message.component';

import { User } from '../../model/user.model';

@Component({
  selector: 'auth-form',
  standalone: true,
  imports: [FormsModule, AuthMessageComponent, NgIf],
  template: `
    <div class="auth-form">
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        {{ title }}
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <button type="submit">
          {{ title }}
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      .auth-form {
        display: flex;
        &:first-child {
          form {
            border-right: 1px solid rgba(0, 0, 0, 0.1);
          }
        }
        form {
          flex: 1 0;
          padding: 0 40px;
          input {
            display: block;
            border: none;
            background: #ffffff;
            font-size: 13px;
            padding: 6px 30px 6px 10px;
            border-radius: 1px;
            border: 1px solid #ccc;
          }
          .email {
            border-color: #9f72e6;
          }
        }
      }
    `,
  ],
})
export class AuthFormComponent {
  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
