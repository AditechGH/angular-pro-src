import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]',
  standalone: true,
})
export class CreditCardDirective {
  constructor(private element: ElementRef) {
    console.log(this.element);
  }
}
