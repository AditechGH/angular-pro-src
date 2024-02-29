import { Component } from '@angular/core';
import { StoreComponent } from './store/store.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StoreComponent],
  template: `<store></store>`,
  styles: [``],
})
export class AppComponent {}
