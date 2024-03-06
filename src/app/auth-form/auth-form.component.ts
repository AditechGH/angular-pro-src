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
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  standalone: true,
  imports: [FormsModule, NgIf, AuthMessageComponent],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
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
      .email {
        border-color: #9f72e6;
      }
    `,
  ],
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage!: boolean;

  @ViewChild('email') email!: ElementRef;

  @ViewChildren('message') message!: QueryList<AuthMessageComponent>;

  @ContentChildren('remember') remember!: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute(
      'placeholder',
      'Enter your email address'
    );
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();
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
