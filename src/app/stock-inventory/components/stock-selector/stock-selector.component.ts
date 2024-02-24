import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'stock-selector',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="stock-selector" [formGroup]="parent">

    </div>
  `,
  styleUrl: './stock-selector.component.scss'
})
export class StockSelectorComponent {
  @Input() parent!: FormGroup;
}
