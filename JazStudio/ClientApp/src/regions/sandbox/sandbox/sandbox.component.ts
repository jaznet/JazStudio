import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { JzRegionBaseComponent } from '../../../library/jz-regions/jz-region-base/jz-region-base.component';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent extends JzRegionBaseComponent implements OnInit, AfterViewInit  {

  constructor(host: AppService) {
    super(host);
  }



}
