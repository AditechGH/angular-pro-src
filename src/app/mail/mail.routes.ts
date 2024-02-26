import { Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';

import { mailFolderResolver } from './containers/mail-folder/mail-folder.resolve';
import { mailViewResolver } from './components/mail-view/mail-view.resolve';
import { mailViewGaurd } from './components/mail-view/mail-view.gaurd';

// routes
export const routes: Routes = [
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
  { path: '', pathMatch: 'full', redirectTo: 'folder/inbox' },
];
