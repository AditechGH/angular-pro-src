import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'folder',
    loadChildren: () => import('./mail/mail.routes').then((x) => x.routes),
    providers: [importProvidersFrom(HttpClientModule)],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'folder',
  },
  {
    path: '**',
    redirectTo: 'folder/inbox',
  },
];
