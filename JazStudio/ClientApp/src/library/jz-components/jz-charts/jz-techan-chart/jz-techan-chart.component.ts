import { AfterViewInit, Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as techan from 'techan';

@Component({
  selector: 'app-jz-techan-chart',
  templateUrl: './jz-techan-chart.component.html',
  styleUrls: ['./jz-techan-chart.component.css']
})
export class JzTechanChartComponent implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'fit-to-parent';
  private chartData: any[]; // Your OHLC data


  constructor(private elementRef: ElementRef) {
    this.chartData = [/* Load your OHLC data here */];
  }

    ngOnInit(): void {
      // Initialize D3 and Techan after ensuring that D3 is ready.
      d3.select(this.elementRef.nativeElement).append('svg').attr('width', 500).attr('height', 500);

      // Now, you can initialize Techan and set up your chart.
    //  const xScale = techan.scale.financetime().range([0, 100]);;
    }
    ngAfterViewInit(): void {
      const container = this.elementRef.nativeElement.querySelector('.chart-container');

      // Create and render the chart in the 'container' element using D3.js and Techan.
      const chart = this.createTechanChart(container, this.chartData);
    }

  createTechanChart(container: any, chartData: any[]) {
    console.log('createTechanChart');
  }
}
