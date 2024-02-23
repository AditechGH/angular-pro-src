import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

import { User } from '../../model/user.model';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [],
  template: `
    <div class="auth-page">
      <div #entry></div>
    </div>
  `,
  styles: [``],
})
export class AuthPageComponent implements OnInit {
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    const component = this.viewContainerRef.createComponent(AuthFormComponent);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
