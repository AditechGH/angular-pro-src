import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { forkJoin } from 'rxjs';

import { StockBranchComponent } from '../../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../../components/stock-selector/stock-selector.component';

import { StockValidators } from './stock-inventory.validators';

import { StockInventoryService } from '../../services/stock-inventory.service';

import { Product } from '../../models/product.interface';
import { StockItem } from '../../models/stock-item.interface';

@Component({
  selector: 'stock-inventory',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CurrencyPipe,
    JsonPipe,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
  ],
  providers: [StockInventoryService],
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
          [map]="productMap"
          (removed)="removeStock($event)"
        ></stock-products>

        <div class="stock-inventory__price">
          Total: {{ total | currency : 'USD' : 'symbol' }}
        </div>

        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order stock</button>
        </div>

        <pre> {{ form.value | json }}</pre>
      </form>
    </div>
  `,
  styleUrls: ['./stock-inventory.component.scss'],
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [];
  total!: number;
  productMap!: Map<number, Product>;

  form = this.fb.group(
    {
      store: this.fb.group({
        branch: ['', [Validators.required, StockValidators.checkBranch]],
        code: ['', Validators.required],
      }),
      selector: this.createStock({}),
      stock: this.fb.array([]),
    },
    { validator: StockValidators.checkStockExists }
  );

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService
  ) {}

  ngOnInit(): void {
    const cart = this.stockService.getCartItems();
    const products = this.stockService.getProducts();

    forkJoin([cart, products]).subscribe(
      ([cart, products]: [StockItem[], Product[]]) => {
        const myMap = products.map<[number, Product]>((product) => [
          product.id,
          product,
        ]);

        this.productMap = new Map<number, Product>(myMap);
        this.products = products;
        cart.forEach((item) => this.addStock(item));

        this.calculateTotal(this.form.get('stock')?.value as StockItem[]);
        this.form
          .get('stock')
          ?.valueChanges.subscribe((value) =>
            this.calculateTotal(value as StockItem[])
          );
      }
    );
  }

  calculateTotal(value: StockItem[]) {
    const total = value.reduce((prev, next) => {
      return (
        prev + next.quantity! * this.productMap.get(next.product_id!)!.price
      );
    }, 0);
    this.total = total;
  }

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
