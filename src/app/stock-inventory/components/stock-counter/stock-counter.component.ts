import { Component, Input } from '@angular/core';

@Component({
  selector: 'stock-counter',
  standalone: true,
  imports: [],
  template: `
    <div class="stock-counter">
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <button
              type="button"
              (click)="increment()"
              [disabled]="value === max"
            >
              +
            </button>
            <button
              type="button"
              (click)="decrement()"
              [disabled]="value === min"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './stock-counter.component.scss',
})
export class StockCounterComponent {
  @Input()
  step: number = 10;

  @Input()
  min: number = 10;

  @Input()
  max: number = 1000;

  value: number = 10;

  increment() {
    this.value = Math.min(this.value + this.step, this.max);
  }

  decrement() {
    this.value = Math.max(this.value - this.step, this.min);
  }
}
