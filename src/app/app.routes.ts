import { Routes } from '@angular/router';

import { mailRoutes } from './mail/mail.routes';

export const routes: Routes = [
  ...mailRoutes,
  {
    path: 'dashboard',
    data: { preload: true },
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((x) => x.routes),
  },
  { path: '**', redirectTo: 'mail/folder/inbox' },
];
