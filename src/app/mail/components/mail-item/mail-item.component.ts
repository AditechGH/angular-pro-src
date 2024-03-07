import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DatePipe],
  template: `
    <a
      class="mail-item"
      [routerLink]="['/mail', { outlets: { pane: ['message', message.id] } }]"
      routerLinkActive="active"
    >
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date : 'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `,
  styleUrl: './mail-item.component.scss',
})
export class MailItemComponent {
  @Input() message!: Mail;
}
