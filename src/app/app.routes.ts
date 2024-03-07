import { Routes } from '@angular/router';

import { mailRoutes } from './mail/mail.routes';

import { canMatch } from './auth/auth.guard';

export const routes: Routes = [
  ...mailRoutes,
  {
    path: 'dashboard',
    canMatch: [canMatch],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((x) => x.routes),
  },
  { path: '**', redirectTo: 'mail/folder/inbox' },
];
