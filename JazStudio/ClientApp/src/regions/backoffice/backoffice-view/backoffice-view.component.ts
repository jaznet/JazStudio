import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { JzRegionBase } from '../../../library/jz-regions/jz-region-base';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'app-backoffice-view',
  templateUrl: './backoffice-view.component.html',
  styleUrls: ['./backoffice-view.component.css']
})
export class BackofficeViewComponent extends JzRegionBase implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'fit-to-parent';

  constructor(private host: AppService) {
    super();
  }

  ngOnInit(): void {
    this.host.showMenu();
    console.log("BackofficeViewComponent");
  }

  ngAfterViewInit(): void {
    this.host.showMenu();
    console.log('Method not implemented.');
  }
}
