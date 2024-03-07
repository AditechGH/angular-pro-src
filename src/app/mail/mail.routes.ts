import { Routes } from '@angular/router';

import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

import { canActivateChild } from '../auth/auth.guard';
import { mailViewGaurd } from './components/mail-view/mail-view.gaurd';
import { mailViewResolver } from './components/mail-view/mail-view.resolve';
import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';

export const mailRoutes: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    canActivateChild: [canActivateChild],
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
        canDeactivate: [mailViewGaurd],
        resolve: {
          message: mailViewResolver,
        },
      },
    ],
  },
];
