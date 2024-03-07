import { Component } from '@angular/core';
import { CreditCardDirective } from './credit-card/credit-card.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreditCardDirective],
  template: `
    <div>
      <label>
        Credit Card Number
        <input
          name="credit-card"
          type="text"
          placeholder="Enter your 16-digit card number"
          credit-card
        />
      </label>
    </div>
  `,
})
export class AppComponent {}
