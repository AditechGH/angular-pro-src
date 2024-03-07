import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mail-app',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      ></router-outlet>
    </div>
  `,
  styleUrl: './mail-app.component.scss',
})
export class MailAppComponent {
  onActivate(event: any) {
    console.log('Activate:', event);
  }

  onDeactivate(event: any) {
    console.log('Deactivate:', event);
  }
}
