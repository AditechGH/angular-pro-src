import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'stock-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stock-counter">
      <div>
        <div 
          (keydown)="onKeyUp($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
          tabindex="0">
          <p>{{ value }}</p>
          <div tabindex="-1">
            <button type="button" tabindex="-1" (click)="increment()" [disabled]="value === max">
              +
            </button>
            <button type="button" tabindex="-1" (click)="decrement()" [disabled]="value === min">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockCounterComponent {
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() changed = new EventEmitter<number>();

  value: number = 0;
  focused!: boolean;

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
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onFocus(event: FocusEvent) {
    this.focused = true;
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
