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

    component.value = 0;
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
  });

  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not decrement below the minimum value', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not increment above the maximum value', () => {
    for(let i = 0; i <= 200; i++) {
        component.increment();
    }
    expect(component.value).toBe(100);
  })
  
});
