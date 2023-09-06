import { Component, HostBinding } from '@angular/core';
import { PaletteMgrService } from '../services/app-services/palette-mgr.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('class') classes = 'fit-to-parent';

  title = 'app';

  constructor(
    private app:AppService,
    private palette: PaletteMgrService)
  {
    this.palette.InitializePalette();
    console.log('app-root');
  }
}

