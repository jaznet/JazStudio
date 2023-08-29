import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { JzRegionBase } from '../../../library/jz-regions/jz-region-base';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent extends JzRegionBase implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'fit-to-parent';

  constructor(private host: AppService) {
    super();
  }

  ngOnInit(): void {
    this.host.showMenu();
    console.log("DataVizComponent");
  }

  ngAfterViewInit(): void {
    this.host.showMenu();
    console.log('Method not implemented.');
  }
}
