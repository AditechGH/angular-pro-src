import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div>
      <ng-container [ngTemplateOutlet]="tmpl"></ng-container>
      <ng-template #tmpl> Adnan Alhassan : Ghana, West Africa </ng-template>
    </div>
  `,
})
export class AppComponent {}
