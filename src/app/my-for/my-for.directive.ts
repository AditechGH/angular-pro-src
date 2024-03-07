import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { User } from '../interface/user.interface';

@Directive({
  selector: '[myFor][myForOf]',
  standalone: true,
})
export class MyForDirective {
  @Input() set myForOf(collection: User[]) {
    this.view.clear();
    collection.forEach((item: User, index: number) => {
      this.view.createEmbeddedView(this.template, { $implicit: item, index });
    });
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
}
