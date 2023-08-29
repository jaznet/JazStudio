import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { JzRegionBase } from '../../../library/jz-regions/jz-region-base';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'app-dataviz-view',
  templateUrl: './dataviz-view.component.html',
  styleUrls: ['./dataviz-view.component.css']
})
export class DatavizViewComponent extends JzRegionBase implements OnInit, AfterViewInit {

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
