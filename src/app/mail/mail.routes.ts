import { Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';

import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';
import { mailViewResolver } from './components/mail-view/mail-view.resolve';

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
    outlet: 'pane',
    resolve: {
      message: mailViewResolver,
    },
  },
];
