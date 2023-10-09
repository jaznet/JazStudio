
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import { ChartLayoutMgr } from '../chart-elements/chart-layout-mgr';
import { DataPoints } from '../data-models/data-points';
import { ChartDataService } from '../data-models/chart-data.service';
import { TechanService } from '../../techan/techan.service';
import * as techan from 'techan';

export class PlotMacd {

  techanSvc: TechanService;

  constructor(
    private chartLayout: ChartLayoutMgr | undefined,
    private dataPoints: DataPoints,
    private dataService: ChartDataService)
  {
    this.techanSvc = new TechanService();
  }

  drawMacd() {
    this.chartLayout!.plotGroup2
      .append('text')
      .text('MACD')
      .attr('class', 'subplot')
      .attr('x', this.chartLayout!.axes.leftAxis + 8)
      .attr('y', 21.5);

    const xScale = techan.scale.financetime()
      .domain(techan.scale.plot.time(this.dataService.ohlcdata).domain())
      .range([0, this.chartLayout!.plotMacd.width - this.chartLayout!.axes.leftAxis - this.chartLayout!.axes.rightAxis]);

    const yScale = d3Scale.scaleLinear()
      .domain(techan.scale.plot.macd(this.dataService.macddata).domain())
      .range([this.chartLayout!.plotMacd.height, 0]);

    const techanMacdPlot = techan.plot.macd()
      .xScale(xScale)
      .yScale(yScale);

    const Chart = this.chartLayout!.plotGroup2.append('g')
      .attr('id', 'techan-macd');

    Chart.append('rect')
      .attr('id', 'macd-rect')
      .attr('width', this.chartLayout?.plotMacd.width)
      .attr('height', this.chartLayout?.plotMacd.height)
      .attr('fill', 'transparent');
  
    const AxisLeft = Chart.append('g')
      .attr('id', 'yaxis left macd')
      .attr('class', 'yaxis left')
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis+ ',0)');

    AxisLeft
      .append('rect')
      .attr('width', this.chartLayout?.axes.leftAxis)
      .attr('height', this.chartLayout?.plotMacd.height)
      .attr('fill','transparent');

    AxisLeft.call(d3Axis.axisLeft(yScale).ticks(3));
    
    const Data = Chart.append('g')
      .attr('id', 'Data_Macd')
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis + ',0)');

    Data.datum(this.dataService.macddata).call(techanMacdPlot);

    const AxisRight = Chart.append('g')
      .attr('id', 'yaxis right')
      .attr('class', 'yaxis right')
      .attr('transform', 'translate(' + (this.chartLayout!.plotMacd.width - this.chartLayout!.axes.rightAxis) + ',0)');

    AxisRight
      .append('rect')
      .attr('width', this.chartLayout?.axes.rightAxis)
      .attr('height', this.chartLayout?.plotMacd.height);

    AxisRight.call(d3Axis.axisRight(yScale).ticks(3));
  }
}
