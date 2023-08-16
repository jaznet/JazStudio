import { Component, HostBinding } from '@angular/core';
import { PaletteMgrService } from '../services/app-services/palette-mgr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @HostBinding('class') classes = 'fit-to-parent';

  title = 'app';

  constructor(private palette: PaletteMgrService) {
    this.palette.InitializePalette();
    console.log('app-root');
  }
}

