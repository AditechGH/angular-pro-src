import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
  constructor(private http: HttpClient, @Inject('api') private api: string) {}

  getFood(): Observable<any> {
    console.log(this.api);
    return this.http.get(this.api);
  }
}
