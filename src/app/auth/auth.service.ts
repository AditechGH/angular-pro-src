import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  user = { isAdmin: false };
  checkPermissions() {
    return of(this.user.isAdmin);
  }
  isLoggedIn() {
    return of(true);
  }
}
