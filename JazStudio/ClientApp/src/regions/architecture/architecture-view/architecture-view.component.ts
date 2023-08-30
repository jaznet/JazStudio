import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { JzRegionBaseComponent } from '../../../library/jz-regions/jz-region-base/jz-region-base.component';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'app-architecture-view',
  templateUrl: './architecture-view.component.html',
  styleUrls: ['./architecture-view.component.css']
})
export class ArchitectureViewComponent extends JzRegionBaseComponent implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'fit-to-parent';

  constructor(host: AppService) {
    super(host);
  }



}
