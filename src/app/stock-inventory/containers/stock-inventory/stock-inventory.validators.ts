import { AbstractControl } from '@angular/forms';
import { StockItem } from '../../models/stock-item.interface';

export class StockValidators {
  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? null : { invalidBranch: true };
  }
  static checkStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');

    if (!(stockItem && selector)) return null;

    const exists = stockItem.value.some((stock: StockItem) => {
      return stock.product_id === parseInt(selector.value.product_id);
    });

    return exists ? { stockExists: true } : null;
  }
}
