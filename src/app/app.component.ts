import { Component } from '@angular/core';

import { StockInventoryComponent } from './stock-inventory/containers/stock-inventory/stock-inventory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StockInventoryComponent],
  template: `
    <div>
      <stock-inventory></stock-inventory>
    </div>
  `,
  styles: [``],
})
export class AppComponent {}
