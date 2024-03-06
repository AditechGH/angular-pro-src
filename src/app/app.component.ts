import { Component } from '@angular/core';

import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OneComponent, TwoComponent, ThreeComponent],
  template: `
    <div>
      <example-one></example-one>
      <example-two></example-two>
      <example-three></example-three>
    </div>
  `,
})
export class AppComponent {}
