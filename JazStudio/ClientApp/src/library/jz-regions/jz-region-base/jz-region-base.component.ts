import { Component } from '@angular/core';
import { AppService } from '../../../app/app.service';

@Component({
  selector: 'app-jz-region-base',
  templateUrl: './jz-region-base.component.html',
  styleUrls: ['./jz-region-base.component.css']
})
export class JzRegionBaseComponent {

  constructor(private host: AppService) {
   
  }

  ngOnInit(): void {
 
  }

  ngAfterViewInit(): void {
    this.host.showMenu();
    console.log("RegionBaseComponent - AfterViewInit");
  }
}
