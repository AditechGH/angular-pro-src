import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mail-app',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="mail">
      <router-outlet></router-outlet>
    </div>
    <div class="mail">
      <router-outlet name="pane"></router-outlet>
    </div>
  `,
  styleUrl: './mail-app.component.scss',
})
export class MailAppComponent {}
