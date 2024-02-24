import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="stock-inventory">
      Hello world!
    </div>
  `,
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent {}
