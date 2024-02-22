import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'auth-remember',
  standalone: true,
  imports: [],
  template: `
    <label>
      <input type="checkbox" [checked]="isChecked" (change)="onChecked()" />
      Keep me logged in
    </label>
  `,
  styles: ``,
})
export class AuthRememberComponent {
  @Output('checked') checked = new EventEmitter<boolean>();
  isChecked: boolean = false;

  onChecked() {
    this.checked.emit(this.isChecked = !this.isChecked);
  }
}
