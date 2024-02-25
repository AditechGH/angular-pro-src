import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

import { MailItemComponent } from '../../components/mail-item/mail-item.component';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-folder',
  standalone: true,
  imports: [NgForOf, MailItemComponent],
  template: `
    <h2>Inbox</h2>
    <mail-item *ngFor="let message of messages" [message]="message">
    </mail-item>
  `,
  styleUrl: './mail-folder.component.scss',
})
export class MailFolderComponent {
  messages: Mail[] = [
    {
      id: 1,
      folder: 'inbox',
      from: 'Jane Smith',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
      timestamp: 1487848162905,
    },
  ];
}
