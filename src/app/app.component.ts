import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthPageComponent } from './auth/containers/auth-page/auth-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthPageComponent],
  template: `<auth-page></auth-page>`,
  styles: [``],
})
export class AppComponent {}
