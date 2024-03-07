import { Routes } from '@angular/router';

import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';

export const mailRoutes: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: {
      messages: mailFolderResolver,
    },
  },
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane'
  }
];