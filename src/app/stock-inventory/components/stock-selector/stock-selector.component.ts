import { NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { StockCounterComponent } from '../stock-counter/stock-counter.component';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf, StockCounterComponent],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [ngValue]="product.id">
            {{ product.name }}
          </option>
        </select>
        <stock-counter
          [step]="10"
          [min]="10"
          [max]="1000"
          formControlName="quantity"
        >
        </stock-counter>
        <button
          type="button"
          (click)="onAdd()"
          [disabled]="stockExists || notSelected"
        >
          Add stock
        </button>
        <div class="stock-selector__error" *ngIf="stockExists">
          Item already exists in the stock
        </div>
      </div>
    </div>
  `,
  styleUrl: './stock-selector.component.scss',
})
export class StockSelectorComponent {
  @Input() parent!: FormGroup;
  @Input() products!: Product[];

  @Output() added = new EventEmitter<any>();

  get notSelected() {
    return !this.parent.get('selector.product_id')!.value;
  }

  get stockExists() {
    return (
      this.parent.hasError('stockExists') &&
      this.parent.get('selector.product_id')!.dirty
    );
  }

  onAdd() {
    this.added.emit(this.parent.get('selector')?.value);
    this.parent.get('selector')?.reset({
      product_id: '',
      quantity: 10,
    });
  }
}
