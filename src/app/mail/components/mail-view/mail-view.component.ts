import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async)?.from }}</h2>
      <p>{{ (message | async)?.full }}</p>
    </div>
  `,
  styleUrl: './mail-view.component.scss',
})
export class MailViewComponent {
  message: Observable<Mail> = this.route.data.pipe(map((x) => x['message']));
  constructor(private route: ActivatedRoute) {}
}
