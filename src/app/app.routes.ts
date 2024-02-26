import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

import { MailService } from './mail/mail.service';
import { AuthService } from './auth/auth.service';
import { canActivate, canActivateChild, canMatch } from './auth/auth.guard';
import { MailAppComponent } from './mail/components/mail-app/mail-app.component';

export const routes: Routes = [
  {
    path: 'mail',
    canActivate: [canActivate],
    component: MailAppComponent,
    loadChildren: () => import('./mail/mail.routes').then((x) => x.routes),
    providers: [
      importProvidersFrom(HttpClientModule),
      MailService,
      AuthService,
    ],
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
