import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { map, of } from 'rxjs';

import { StockInventoryService } from './stock-inventory.service';

function createResponse(body: any) {
  return of(new HttpResponse({ body: JSON.stringify(body) }));
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 },
];
const productItems = [
  { id: 1, price: 10, name: 'Test' },
  { id: 2, price: 100, name: 'Another Test' },
];

describe('StockInventoryService', () => {
  let service: StockInventoryService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        { provide: HttpClient, useClass: MockHttp },
      ],
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(StockInventoryService);
  });

  it('should get cart items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));

    service
      .getCartItems()
      .pipe(map((response: any) => JSON.parse(response.body)))
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(cartItems);
      });
  });

  it('should get product items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...productItems]));

    service
      .getProducts()
      .pipe(map((response: any) => JSON.parse(response.body)))
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(productItems);
      });
  });
});
