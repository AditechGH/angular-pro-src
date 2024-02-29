import { Component, DoCheck, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: ` <div>Counter: {{ counter }}</div> `,
  styles: [``],
})
export class AppComponent implements OnInit, DoCheck {
  counter = 0;
  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => this.counter++);
      }
      this.zone.run(() => {
        setTimeout(() => (this.counter = this.counter), 1000);
      });
    });
  }

  ngDoCheck(): void {
    console.log('Change detection has been run!');
  }
}
