import {
  AfterContentInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div #entry></div>
      <ng-template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </ng-template>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry!: ViewContainerRef;

  @ViewChild('tmpl', { read: TemplateRef, static: true })
  tmpl!: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Adnan Alhassan',
      location: 'West Africa, Ghana',
    });
  }
}
