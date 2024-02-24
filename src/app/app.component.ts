import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MyForComponent } from './my-for/containers/my-for/my-for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyForComponent],
  template: `<app-my-for></app-my-for>`,
  styles: [``],
})
export class AppComponent {}
