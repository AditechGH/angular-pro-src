import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'mail-item',
  standalone: true,
  imports: [RouterModule, DatePipe],
  template: `
    <a
      class="mail-item"
      [routerLink]="['', { outlets: { pane: ['message', message.id] } }]"
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
