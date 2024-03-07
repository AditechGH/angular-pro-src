import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanMatchFn } from '@angular/router';

import { AuthService } from './auth.service';

export const canMatch: CanMatchFn = () => {
  return inject(AuthService).checkPermissions();
};

export const canActivate: CanActivateFn = () => {
  return inject(AuthService).isLoggedIn();
};

export const canActivateChild: CanActivateChildFn = () => {
  return inject(AuthService).isLoggedIn();
};
