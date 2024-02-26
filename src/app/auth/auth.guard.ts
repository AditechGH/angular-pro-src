import { inject } from '@angular/core';

import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(AuthService).checkPermissions();
};
