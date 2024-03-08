import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    PizzaViewerComponent,
    SideViewerComponent,
    DrinkViewerComponent,
  ],
  template: `
    <div>
      <pizza-viewer></pizza-viewer>
      <side-viewer></side-viewer>
      <drink-viewer></drink-viewer>
    </div>
  `,
    styles: [`
    pizza-viewer,
    side-viewer,
    drink-viewer {
      display: block;
      border-bottom: 2px solid #eee;
      padding: 20px 0;
    }
  `],
})
export class AppComponent {}
