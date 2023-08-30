
import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { JzRegionBaseComponent } from '../../../library/jz-regions/jz-region-base/jz-region-base.component';

@Component({
  selector: 'app-dataviz-view',
  templateUrl: './dataviz-view.component.html',
  styleUrls: ['./dataviz-view.component.css']
})
export class DatavizViewComponent extends JzRegionBaseComponent implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'fit-to-parent';

  constructor( host: AppService) {
      super(host);
  }

 

}
