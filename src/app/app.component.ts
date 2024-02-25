import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
              { outlets: { primary: 'folder/inbox', pane: null } }
            ]"
            routerLinkActive="active"
          >
            Inbox
          </a>
          <a
            [routerLink]="[
              { outlets: { primary: 'folder/trash', pane: null } }
            ]"
            routerLinkActive="active"
          >
            Trash
          </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `,
  styleUrl: 'app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
}
