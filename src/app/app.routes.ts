import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

import { MailService } from './mail/mail.service';
import { AuthService } from './auth/auth.service';
import { canActivate, canMatch } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'mail',
    canActivate: [canActivate],
    loadChildren: () => import('./mail/mail.routes').then((x) => x.routes),
    providers: [importProvidersFrom(HttpClientModule), MailService, AuthService],
  },
  {
    path: 'dashboard',
    canMatch: [canMatch],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((x) => x.routes),
    providers: [AuthService],
  },
  {
    path: '**',
    redirectTo: 'mail/folder/inbox',
  },
];
