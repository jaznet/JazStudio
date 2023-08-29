import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { JzRegionBase } from '../../../library/jz-regions/jz-region-base';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent extends JzRegionBase implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'fit-to-parent';

  constructor(private host: AppService) {
    super();
  }

  ngOnInit(): void {
    this.host.showMenu();
    console.log("AdminComponent");
  }

  ngAfterViewInit(): void {
    this.host.showMenu();
    console.log('Method not implemented.');
  }
}
