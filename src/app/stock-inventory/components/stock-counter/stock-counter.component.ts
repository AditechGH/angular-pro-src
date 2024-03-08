import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true,
};

@Component({
  selector: 'stock-counter',
  standalone: true,
  imports: [],
  providers: [COUNTER_CONTROL_ACCESSOR],
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
export class StockCounterComponent implements ControlValueAccessor {
  private onTouch!: Function;
  private onModelChange!: Function;

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: number): void {
    this.value = value || 0;
  }

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

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
    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment() {
    this.value = Math.min(this.value + this.step, this.max);
    this.onModelChange(this.value);
    this.onTouch();
  }

  decrement() {
    this.value = Math.max(this.value - this.step, this.min);
    this.onModelChange(this.value);
    this.onTouch();
  }
}
