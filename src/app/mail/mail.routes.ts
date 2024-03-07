import { Routes } from '@angular/router';

import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

import { mailViewResolver } from './components/mail-view/mail-view.resolve';
import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';
import { canActivate } from '../auth/auth.guard';

export const mailRoutes: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivate: [canActivate],
    children: [
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
    ],
  },
];