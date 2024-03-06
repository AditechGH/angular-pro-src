import { NgIf } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRememberComponent } from './auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <div>
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
        <div *ngIf="showMessage">You will be logged in for 30 days</div>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean = false;

  @ContentChildren('remember') remember!: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit(): void {
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
