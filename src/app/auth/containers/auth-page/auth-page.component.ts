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
      <button (click)="moveComponent()">Move</button>
      <div #entry></div>
    </div>
  `,
  styles: [`
    .auth-page {
      button {
        margin: 0 0 20px 30px;
      }
    }
  `],
})
export class AuthPageComponent implements OnInit {
  component!: ComponentRef<AuthFormComponent>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.createComponent(AuthFormComponent);
    this.component = this.viewContainerRef.createComponent(AuthFormComponent, {
      index: 0,
    });
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.viewContainerRef.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
