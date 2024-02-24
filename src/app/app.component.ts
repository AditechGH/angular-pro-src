import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FilesComponent } from './files/containers/files/files.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilesComponent],
  template: `<files></files>`,
  styles: [``],
})
export class AppComponent {}
