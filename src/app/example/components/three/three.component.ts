import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [],
  template: `
    <div class="example-three">
      Example Three
    </div>
    <div class="example-one">
      Example One!
    </div>
  `,
   styles: [`
   .example-one {
     border: 2px solid green;
   }
 `],
})
export class ThreeComponent {}