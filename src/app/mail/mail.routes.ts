import { Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

// routes
export const routes: Routes = [
  { path: ':name', component: MailFolderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inbox' },
];
