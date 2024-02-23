import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ExamplePageComponent } from './example/containers/example-page/example-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExamplePageComponent],
  template: ` <example-page></example-page> `,
  styles: [``],
})
export class AppComponent {}
