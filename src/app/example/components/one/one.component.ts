import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-one',
  standalone: true,
  imports: [],
  template: `
    <div class="example-one">
      Example One
    </div>
  `,
  styles: [`
  .example-one {
    background: #9f72e6;
    font-size: 19px;
    color: #fff;
    margin-bottom: 50px;
    padding: 10px 20px;
  }
`]
})
export class OneComponent {}
