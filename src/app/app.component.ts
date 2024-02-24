import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CreditCardComponent } from './credit-card/containers/credit-card/credit-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreditCardComponent],
  template: `<app-credit-card></app-credit-card>`,
  styles: [``],
})
export class AppComponent {}
