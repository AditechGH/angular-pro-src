import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MailAppComponent } from './mail/components/mail-app/mail-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MailAppComponent],
  template: `
    <div class="app">
      <header>
        <img src="assets/img/logo.svg" />
      </header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="[
              '/mail',
              { outlets: { primary: 'folder/inbox', pane: null } }
            ]"
            routerLinkActive="active"
          >
            Inbox
          </a>
          <a
            [routerLink]="[
              '/mail',
              { outlets: { primary: 'folder/trash', pane: null } }
            ]"
            routerLinkActive="active"
          >
            Trash
          </a>
          <a [routerLink]="['/dashboard']" routerLinkActive="active">
            Dashboard
          </a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: 'app.component.scss',
})
export class AppComponent {}
