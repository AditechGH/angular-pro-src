import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'app-mail-view',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async)?.from }}</h2>
      <p>{{ (message | async)?.full }}</p>
    </div>
    <div class="mail-reply">
      <textarea
        (change)="updateReply($event)"
        placeholder="Type your reply..."
        [value]="reply"
      >
      </textarea>
      <button type="button" (click)="sendReply()">Send</button>
    </div>
  `,
  styleUrl: './mail-view.component.scss',
})
export class MailViewComponent implements OnInit {
  reply = '';
  message: Observable<Mail> = this.route.data.pipe(map((x) => x['message']));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.reply = '';
    });
  }

  updateReply(event: Event) {
    this.reply = (event.target as HTMLInputElement).value;
  }

  sendReply() {
    console.log('Sent!', this.reply);
  }
}
