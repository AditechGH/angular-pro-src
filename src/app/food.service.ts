import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
  constructor(
    private http: HttpClient,
    private api: String
  ) {
    console.log(this.api)
  }

  getFood(): Observable<any> {
    return this.http.get(this.api as string);
  }
}
