import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { StockBranchComponent } from '../../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../../components/stock-selector/stock-selector.component';

import { Product } from '../../models/product.interface';
import { StockItem } from '../../models/stock-item.interface';

@Component({
  selector: 'stock-inventory',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
  ],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <stock-branch [parent]="form"></stock-branch>

        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)"
        ></stock-selector>

        <stock-products
          [parent]="form"
          (removed)="removeStock($event)"
        ></stock-products>

        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order stock</button>
        </div>

        <pre> {{ form.value | json }}</pre>
      </form>
    </div>
  `,
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent {
  products: Product[] = [
    { id: 1, price: 2800, name: 'MacBook Pro' },
    { id: 2, price: 50, name: 'USB-C Adaptor' },
    { id: 3, price: 400, name: 'iPod' },
    { id: 4, price: 900, name: 'iPhone' },
    { id: 5, price: 600, name: 'Apple Watch' },
  ];

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: '',
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  createStock(stock: StockItem) {
    return this.fb.group({
      product_id: stock.product_id || '',
      quantity: stock.quantity || 10,
    });
  }

  addStock(stock: StockItem) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
