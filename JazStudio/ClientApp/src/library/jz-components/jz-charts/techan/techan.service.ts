import { Injectable } from '@angular/core';
import * as d3 from 'd3'; // Import D3 library
import { ChartDataService } from '../technical-chart/data-models/chart-data.service';
import { ChartLayoutMgr } from '../technical-chart/chart-elements/chart-layout-mgr';

// Declare the techan module to avoid TypeScript errors
declare const techan: any;

@Injectable({
  providedIn: 'root'
})
export class TechanService {

  constructor() { }

  drawTimeScale(svg: any, width: number, height: number) {
    // Create a time scale using techan.scale.financetime()
    const techanTime = techan.scale.financetime().range([0, width]);

    // Create an x-axis generator
    const xAxis = d3.axisBottom(techanTime);

    // Render the x-axis
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);
  }

  createXScale(dataService: ChartDataService, chartLayout: ChartLayoutMgr): any {
    // Create the xScale
    const xScale = techan.scale.financetime()
      .domain(techan.scale.plot.time(dataService.ohlcdata).domain())
      .range([0, chartLayout.plotOhlc.width - chartLayout.axes.leftAxis - chartLayout.axes.rightAxis]);

    return xScale;
  }
}
