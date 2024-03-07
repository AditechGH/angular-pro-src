import { Routes } from '@angular/router';

import { mailRoutes } from './mail/mail.routes';

import { authGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

export const routes: Routes = [
  ...mailRoutes,
  {
    path: 'dashboard',
    canMatch: [authGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((x) => x.routes),
    providers: [AuthService],
  },
  { path: '**', redirectTo: 'mail/folder/inbox' },
];
