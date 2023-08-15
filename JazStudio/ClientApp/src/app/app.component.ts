import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @HostBinding('class') classes = 'fit-to-parent';

  title = 'app';

  constructor() {
    console.log('app-root');
  }
}

