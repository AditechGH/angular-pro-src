import {
  Component,
  ComponentRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

import { User } from '../../model/user.model';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [],
  template: `
    <div class="auth-page">
      <button (click)="destroyComponent()">Destroy</button>
      <div #entry></div>
    </div>
  `,
  styles: [``],
})
export class AuthPageComponent implements OnInit {
  component!: ComponentRef<AuthFormComponent>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.component = this.viewContainerRef.createComponent(AuthFormComponent);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
