import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="auth-page">
      <ng-container [ngTemplateOutlet]="tmpl"></ng-container>
      <ng-template #tmpl> Adnan Alhassan : Ghana, West Africa </ng-template>
    </div>
  `,
  styles: [
    `
      .auth-page {
        button {
          margin: 0 0 20px 30px;
        }
      }
    `,
  ],
})
export class AuthPageComponent {}
