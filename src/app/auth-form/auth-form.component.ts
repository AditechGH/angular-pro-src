import { NgIf } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  standalone: true,
  imports: [FormsModule, AuthMessageComponent, NgIf],
  template: `
    <div class="auth-form">
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message
          #message
          [style.display]="showMessage ? 'inherit' : 'none'"
        >
        </auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage!: boolean;

  @ViewChild('message', { static: true }) message!: AuthMessageComponent;

  @ContentChildren('remember') remember!: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterViewInit(): void {
    // this.message.days = 30;
  }

  ngAfterContentInit(): void {
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
