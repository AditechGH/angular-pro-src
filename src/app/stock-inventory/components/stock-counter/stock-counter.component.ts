import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'stock-counter',
  standalone: true,
  imports: [],
  template: `
    <div class="stock-counter" [class.focused]="focus">
      <div>
        <div
          tabindex="0"
          (keydown)="onKeyDown($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
        >
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
  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  @Output() changed = new EventEmitter<number>();

  value: number = 10;
  focus!: boolean;

  onKeyDown(event: KeyboardEvent) {
    const handlers: { [key: string]: Function } = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment(),
    };
    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
  }

  increment() {
    if (this.value < this.max) {
      this.value = Math.min(this.value + this.step, this.max);
      this.changed.emit(this.value);
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value = Math.max(this.value - this.step, this.min);
      this.changed.emit(this.value);
    }
  }
}
