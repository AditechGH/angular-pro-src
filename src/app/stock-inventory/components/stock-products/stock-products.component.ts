import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'stock-products',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
  template: `
    <div class="stock-product" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ item.value.product_id }}
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

  @Output() 
  removed = new EventEmitter<any>();

  onRemove(group: AbstractControl, index: number) {
    this.removed.emit({ group, index });
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
}
