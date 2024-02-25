import { Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';

// routes
export const routes: Routes = [
  {
    path: ':name',
    component: MailFolderComponent,
    resolve: {
      messages: mailFolderResolver
    }
  },
  { path: '', pathMatch: 'full', redirectTo: 'inbox' },
];
