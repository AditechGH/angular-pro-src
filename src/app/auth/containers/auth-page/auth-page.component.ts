import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="auth-page">
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx"
      ></ng-container>
      <ng-template let-name let-location="location" #tmpl>
        {{ name }} : {{ location }}
      </ng-template>
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
export class AuthPageComponent {
  ctx = {
    $implicit: 'Adnan Alhassan',
    location: 'Ghana, West Africa',
  };
}
