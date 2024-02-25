import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

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
          <a routerLink="folder/inbox" routerLinkActive="active"> Inbox </a>
          <a routerLink="folder/trash" routerLinkActive="active"> Trash </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `,
  styleUrl: 'app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
          console.log(event)
      });
  }
}
