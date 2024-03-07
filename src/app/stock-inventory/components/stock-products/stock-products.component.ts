import { CurrencyPipe, NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-products',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, CurrencyPipe],
  template: `
    <div class="stock-product" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id)?.name }}
            </div>
            <div class="stock-product__price">
              {{
                getProduct(item.value.product_id)?.price
                  | currency : 'USD' : 'symbol'
              }}
            </div>
            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity"
            />
            <button type="button" (click)="onRemove(item, i)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './stock-products.component.scss',
})
export class StockProductsComponent {
  @Input() 
  parent!: FormGroup;
  
  @Input() 
  map!: Map<number, Product>;

  @Output() removed = new EventEmitter<any>();

  getProduct(id: number) {
    return this.map.get(id);
  }

  onRemove(group: AbstractControl, index: number) {
    this.removed.emit({ group, index });
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
}
