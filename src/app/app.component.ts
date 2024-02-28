import { Component } from '@angular/core';

import { PizzaViewerComponent } from './viewer/containers/pizza-viewer/pizza-viewer.component';
import { SideViewerComponent } from './viewer/containers/side-viewer/side-viewer.component';
import { DrinkViewerComponent } from './viewer/containers/drink-viewer/drink-viewer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, PizzaViewerComponent, SideViewerComponent, DrinkViewerComponent],
  template: `
    <div>
      <pizza-viewer></pizza-viewer>
      <side-viewer></side-viewer>
      <drink-viewer></drink-viewer>
    </div>
  `,
  styles: [
    `
      pizza-viewer,
      side-viewer,
      drink-viewer {
        display: block;
        border-bottom: 2px solid #eee;
        padding: 20px 0;
      }
    `,
  ],
})
export class AppComponent {}
