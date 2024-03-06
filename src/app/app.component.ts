import {
  AfterContentInit,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button (click)="destroyComponent()">Destroy</button>
      <button (click)="moveComponent()">Move</button>
      <div #entry></div>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  component!: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry!: ViewContainerRef;

  ngAfterContentInit(): void {
    // const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // ComponentFactoryResolver is deprecated in Angular versions 13 and above
    // Using the createComponent method of ViewContainerRef to create the component instance and attach it directly to the entry element.
    this.entry.createComponent(AuthFormComponent);
    this.component = this.entry.createComponent(AuthFormComponent, {
      index: 0,
    });
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
