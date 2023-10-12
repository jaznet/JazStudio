import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-jz-sync-chart-1',
  templateUrl: './jz-sync-chart-1.component.html',
  styleUrls: ['./jz-sync-chart-1.component.css']
})
export class JzSyncChart1Component implements OnInit, AfterViewInit {
  @ViewChild('syncChartContainer', {static:false}) syncChartContainer!: ElementRef;
  constructor() {

  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    // Initialize the chart
    let chart = new Chart({
      // Specify the target element using the nativeElement property of the ElementRef
     // element: this.syncChartContainer.nativeElement,
      // Other chart configuration options
    });

    // Render the chart
    chart.appendTo(this.syncChartContainer.nativeElement);
    console.log('sync',this.syncChartContainer);
  }
}
