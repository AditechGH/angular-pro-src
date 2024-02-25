import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mail-app',
  standalone: true,
  imports: [RouterModule],
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
export class MailAppComponent {
 
}
