import { Component } from '@angular/core';
import { OneComponent } from '../../components/one/one.component';
import { TwoComponent } from '../../components/two/two.component';
import { ThreeComponent } from '../../components/three/three.component';

@Component({
  selector: 'example-page',
  standalone: true,
  imports: [OneComponent, TwoComponent, ThreeComponent],
  template: `
    <div>
      <example-one></example-one>
      <example-two></example-two>
      <example-three></example-three>
    </div>
  `,
  styles: ``,
})
export class ExamplePageComponent {}
