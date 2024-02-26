import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

import { MailService } from './mail/mail.service';
import { AuthService } from './auth/auth.service';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.routes').then((x) => x.routes),
    providers: [importProvidersFrom(HttpClientModule), MailService],
  },
  {
    path: 'dashboard',
    canMatch: [authGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((x) => x.routes),
    providers: [AuthService]
  },
  {
    path: '**',
    redirectTo: 'mail/folder/inbox',
  },
];
