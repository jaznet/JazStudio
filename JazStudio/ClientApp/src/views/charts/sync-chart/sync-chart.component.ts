import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from '@syncfusion/ej2-angular-charts';
import { SyncLicService } from '../../../services/app-services/sync-lic.service';

@Component({
  selector: 'sync-chart',
  templateUrl: './sync-chart.component.html',
  styleUrls: ['./sync-chart.component.css']
})
export class SyncChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  constructor(private sync: SyncLicService) {
  }

  ngAfterViewInit() {
  
    // Initialize the chart
    //let chart = new Chart({
    //  // Specify the target element using the nativeElement property of the ElementRef
    ////  element: this.chartContainer.nativeElement,
    //  // Other chart configuration options
    //});

    //// Render the chart
    //chart.appendTo(this.chartContainer.nativeElement);
    this.sync.HideSyncWarning();
  }

}
