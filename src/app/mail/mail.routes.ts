import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

export const mailRoutes: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    providers: [importProvidersFrom(HttpClientModule)],
  },
];