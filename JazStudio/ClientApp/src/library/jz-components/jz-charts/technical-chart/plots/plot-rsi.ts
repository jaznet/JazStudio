
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import { ChartLayoutMgr } from '../chart-elements/chart-layout-mgr';
import { DataPoints } from '../data-models/data-points';
import { ChartDataService } from '../data-models/chart-data.service';
import { TechanService } from '../../techan/techan.service';
import * as techan from 'techan';

export class PlotRsi {

  techanSvc: TechanService;

  constructor(
    private chartLayout: ChartLayoutMgr | undefined,
    private dataPoints: DataPoints,
    private dataService: ChartDataService)
  {
    this.techanSvc = new TechanService();
  }

  drawRsi() {
    this.chartLayout!.plotGroup3
      .append('text')
      .text('RSI')
      .attr('class', 'subplot')
      .attr('x', this.chartLayout!.axes.leftAxis + 8)
      .attr('y', 21.5);

    const xScale = techan.scale.financetime()
      .domain(techan.scale.plot.time(this.dataService.ohlcdata).domain())
      .range([0, this.chartLayout!.plotMacd.width - this.chartLayout!.axes.leftAxis - this.chartLayout!.axes.rightAxis]);

    const yScale = d3Scale.scaleLinear()
      .domain(techan.scale.plot.rsi(this.dataService.rsidata).domain())
      .range([this.chartLayout!.plotRsi.height, 0]);

    const techanRsiPlot = techan.plot.rsi()
      .xScale(xScale)
      .yScale(yScale);

    const Chart = this.chartLayout!.plotGroup3.append('g')
      .attr('id', 'techan-rsi');

    Chart.append('rect')
      .attr('id', 'rsi-rect')
      .attr('width', this.chartLayout?.plotMacd.width)
      .attr('height', this.chartLayout?.plotMacd.height)
      .attr('fill', 'transparent');
    
    const AxisLeft = Chart.append('g')
      .attr('id', 'yaxis left rsi')
      .attr('class', 'yaxis left')
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis + ',0)');

    AxisLeft
      .append('rect')
      .attr('width', this.chartLayout?.axes.leftAxis)
      .attr('height', this.chartLayout?.plotRsi.height)
      .attr('fill', 'transparent');

    AxisLeft.call(d3Axis.axisLeft(yScale).ticks(3));

    const Data = Chart.append('g')
      .attr('id', 'Data_Rsi')
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis + ',0)');

    Data.datum(this.dataService.rsidata).call(techanRsiPlot);

    const AxisRight = Chart.append('g')
      .attr('id', 'yaxis right')
      .attr('class', 'yaxis right')
      .attr('transform', 'translate(' + (this.chartLayout!.plotRsi.width - this.chartLayout!.axes.rightAxis) + ',0)');

    AxisRight
      .append('rect')
      .attr('width', this.chartLayout?.axes.rightAxis)
      .attr('height', this.chartLayout?.plotRsi.height);

    AxisRight.call(d3Axis.axisRight(yScale).ticks(3));
  }
}
