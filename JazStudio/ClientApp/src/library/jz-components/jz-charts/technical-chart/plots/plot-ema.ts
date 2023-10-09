
import * as d3Scale from 'd3-scale';
import { ChartLayoutMgr } from '../chart-elements/chart-layout-mgr';
import { DataPoints } from '../data-models/data-points';
import { ChartDataService } from '../data-models/chart-data.service';
import { TechanService } from '../../techan/techan.service';

export class PlotEma {

  techanSvc: TechanService;

  constructor(
    private chartLayout: ChartLayoutMgr | undefined,
    private dataPoints: DataPoints,
    private dataService: ChartDataService)
  {
    this.techanSvc = new TechanService();
  }

  drawEma() {
    const xScale = techan.scale.financetime()
      .domain(techan.scale.plot.time(this.dataService.ohlcdata).domain())
      .range([0, this.chartLayout!.plotOhlc.width - this.chartLayout!.axes.leftAxis - this.chartLayout!.axes.rightAxis]);


    const yScale = d3Scale.scaleLinear()
      .domain(this.techanSvc.indicators.ohlc(this.dataService.ohlcdata.slice(23)).domain())
      .range([this.chartLayout!.plotOhlc.height, 0]);

    // Pass data, period, xScale, and yScale as arguments to sma method 
    const techanEmaPlot =
      techan.plot.sma()
        .xScale(xScale)
        .yScale(yScale);


    const Chart = this.chartLayout!.plotGroup1.append('g')
      .attr('id', 'techan-ema')
      .attr('transform', 'translate(0,0)');

    Chart!.append('rect')
      .attr('width', this.chartLayout!.plotOhlc.width)
      .attr('height', this.chartLayout!.plotOhlc.height)
      .attr('fill', 'transparent');

    const Data = Chart.append('g')
      .attr('id', 'Data_Ema')
      .attr('class', 'ema')
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis + ',0)');

    Data.datum(this.dataService.ema).call(techanEmaPlot);
  }
}
