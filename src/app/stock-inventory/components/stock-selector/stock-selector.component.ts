import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [value]="product.id">
            {{ product.name }}
          </option>
        </select>
        <input
          type="number"
          step="10"
          min="10"
          max="1_000"
          formControlName="quantity"
        />
        <button type="button">Add stock</button>
      </div>
    </div>
  `,
  styleUrl: './stock-selector.component.scss',
})
export class StockSelectorComponent {
  @Input() parent!: FormGroup;
  @Input() products!: Product[];
}
