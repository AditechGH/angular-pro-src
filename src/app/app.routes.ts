import { Routes } from '@angular/router';

import { mailRoutes } from './mail/mail.routes';

export const routes: Routes = [
  ...mailRoutes,
  { path: '**', redirectTo: 'folder/inbox' },
];