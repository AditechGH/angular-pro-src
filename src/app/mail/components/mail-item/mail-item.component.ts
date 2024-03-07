import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  standalone: true,
  imports: [DatePipe],
  template: `
    <a class="mail-item">
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
