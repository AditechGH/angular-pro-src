import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StockInventoryService } from '../../services/stock-inventory.service';
import { StockInventoryComponent } from './stock-inventory.component';

const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 },
];

const products = [
  { id: 1, price: 10, name: 'Test' },
  { id: 2, price: 100, name: 'Another Test' },
];

class MockStockInventoryService {
  getCartItems() {
    return of(cartItems);
  }

  getProducts() {
    return of(products);
  }
}

describe('StockInventoryComponent', () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;
  let el: DebugElement;
  let service: StockInventoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockInventoryComponent],
      providers: [
        { provide: StockInventoryService, useClass: MockStockInventoryService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    service = TestBed.inject(StockInventoryService);
    fixture.detectChanges();
  });

  it('should get card items and products on init', () => {
    spyOn(service, 'getProducts').and.callThrough();
    spyOn(service, 'getCartItems').and.callThrough();
    component.ngOnInit();
    expect(service.getProducts).toHaveBeenCalled();
    expect(service.getCartItems).toHaveBeenCalled();
  });

  it('should create a product map from the service response', () => {
    component.ngOnInit();
    expect(component.productMap.get(1)).toEqual(products[0]);
    expect(component.productMap.get(2)).toEqual(products[1]);
  });

  it('should store the products response', () => {
    component.ngOnInit();
    expect(component.products).toEqual(products);
  });

  it('should create a stock item for each cart item', () => {
    spyOn(component, 'addStock');
    component.ngOnInit();
    expect(component.addStock).toHaveBeenCalledWith(cartItems[0]);
    expect(component.addStock).toHaveBeenCalledWith(cartItems[1]);
  });
});
