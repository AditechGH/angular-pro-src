import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { MailService } from './mail/mail.service';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mail/mail.routes').then((x) => x.routes),
    providers: [importProvidersFrom(HttpClientModule), MailService],
  },
  {
    path: '**',
    redirectTo: 'folder/inbox',
  },
];
