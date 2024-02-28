import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCounterComponent } from './stock-counter.component';

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StockCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    component.value = 10;
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(20);
  });

  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(20);
    component.decrement();
    expect(component.value).toBe(10);
  });

  it('should not decrement below the minimum value', () => {
    component.increment();
    expect(component.value).toBe(20);
    component.decrement();
    expect(component.value).toBe(10);
    component.decrement();
    expect(component.value).toBe(10);
  });

  it('should not increment above the maximum value', () => {
    for(let i = 0; i <= 100; i++) {
        component.increment();
    }
    expect(component.value).toBe(1000);
  })

  // Test @Input binding
  it('should not increment over the maximum value', () => {
    component.step = 20;
    component.max = 20;
    component.increment();
    component.increment();
    expect(component.value).toBe(20);
  })

  // Test @Output binding
  it('should call the output on a value change', () => {
    spyOn(component.changed, 'emit').and.callThrough();
    component.step = 100;
    component.increment();
    expect(component.changed.emit).toHaveBeenCalledWith(110)
  })
});
