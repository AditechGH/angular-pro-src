import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx"
      ></ng-container>
      <ng-template let-name let-location="location" #tmpl>
        {{ name }} : {{ location }}
      </ng-template>
    </div>
  `,
})
export class AppComponent {
  ctx = {
    $implicit: 'Adnan Alhassan',
    location: 'Ghana, West Africa',
  };
}
