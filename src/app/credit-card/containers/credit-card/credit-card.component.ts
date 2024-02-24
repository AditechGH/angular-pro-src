import { Component } from '@angular/core';

import { CreditCardDirective } from '../../directives/credit-card.directive';

@Component({
  selector: 'app-credit-card',
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
  styles: [
    `
      input[type='text'] {
        display: block;
        border: none;
        background: #ffffff;
        font-size: 15px;
        padding: 6px 30px 6px 10px;
        border-radius: 1px;
        border: 1px solid #eeeeee;
        margin-top: 10px;
        width: 260px;
      }
      label {
        margin-bottom: 20px;
      }
      h3 {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class CreditCardComponent {}
