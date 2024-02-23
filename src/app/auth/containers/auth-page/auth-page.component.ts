import {
  AfterContentInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [],
  template: `
    <div class="auth-page">
      <div #entry></div>
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
export class AuthPageComponent implements AfterContentInit {
  @ViewChild('tmpl', { read: TemplateRef, static: true })
  tmpl!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterContentInit(): void {
    this.viewContainerRef.createEmbeddedView(this.tmpl);
  }
}
