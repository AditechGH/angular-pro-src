import { Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';
import { MailViewComponent } from './components/mail-view/mail-view.component';

// routes
export const routes: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: {
      messages: mailFolderResolver
    }
  },
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane'
  },
  { path: '', pathMatch: 'full', redirectTo: 'folder/inbox' },
];