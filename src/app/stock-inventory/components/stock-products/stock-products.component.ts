import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'stock-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="stock-product" [formGroup]="parent">

    </div>
  `,
  styleUrl: './stock-products.component.scss'
})
export class StockProductsComponent {
  @Input() 
  parent!: FormGroup;
}
