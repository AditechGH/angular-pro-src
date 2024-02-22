import { NgIf } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

import { User } from '../../model/user.model';

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
          <input type="email" name="email" ngModel #email/>
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
  styles: [
    `
      .auth-form {
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
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean = false;

  @ViewChild('email') email!: ElementRef;

  @ViewChildren('message') message!: QueryList<AuthMessageComponent>;

  @ContentChildren('remember') remember!: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    console.log(this.email);
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }

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
