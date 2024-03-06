import {
  AfterContentInit,
  Component,
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
    <div class="auth-page">
      <div #entry></div>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry!: ViewContainerRef;

  ngAfterContentInit(): void {
    // const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // ComponentFactoryResolver is deprecated in Angular versions 13 and above
    // Using the createComponent method of ViewContainerRef to create the component instance and attach it directly to the entry element.
    const component = this.entry.createComponent(AuthFormComponent);
    component.instance.title = 'Create account';
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}