import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { MailService } from './mail/mail.service';

export const routes: Routes = [
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.routes').then((x) => x.routes),
    providers: [importProvidersFrom(HttpClientModule), MailService],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then((x) => x.routes)
  },
  {
    path: '**',
    redirectTo: 'mail/folder/inbox',
  },
];
