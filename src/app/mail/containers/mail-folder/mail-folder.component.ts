import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { MailItemComponent } from '../../components/mail-item/mail-item.component';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-folder',
  standalone: true,
  imports: [NgForOf, MailItemComponent, AsyncPipe],
  template: `
    <h2>{{ title | async }}</h2>
    <mail-item *ngFor="let message of messages | async" [message]="message">
    </mail-item>
  `,
  styleUrl: './mail-folder.component.scss',
})
export class MailFolderComponent {
  messages: Observable<Mail[]> = this.route.data.pipe(
    map((x) => x['messages'])
  );
  title: Observable<string> = this.route.params.pipe(map((x) => x['name']));
  constructor(private route: ActivatedRoute) {}
}
