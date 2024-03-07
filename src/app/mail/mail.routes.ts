import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

export const mailRoutes: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: {
      messages: mailFolderResolver,
    },
    providers: [importProvidersFrom(HttpClientModule), MailService],
  },
];
