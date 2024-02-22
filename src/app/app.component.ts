import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthPageComponent } from './auth/containers/auth-page/auth-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `<auth-page></auth-page>`,
  styles: [
    `
      auth-page {
        display: inline-block;
        background-color: #ffffff;
        border-radius: 2px;
        border: 1px solid #dce5f2;
        box-shadow: 0 1px 4px rgba(53, 60, 72, 0.1);
        padding: 30px 0;
      }
    `,
  ],
  imports: [RouterOutlet, AuthPageComponent],
})
export class AppComponent {}
