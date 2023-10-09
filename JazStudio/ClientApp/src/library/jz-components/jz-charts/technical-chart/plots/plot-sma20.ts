
import * as d3Scale from 'd3-scale';
import { ChartLayoutMgr } from '../chart-elements/chart-layout-mgr';
import { DataPoints } from '../data-models/data-points';
import { ChartDataService } from '../data-models/chart-data.service';
import { TechanService } from '../../techan/techan.service'
import * as techan from 'techan';

export class PlotSma20 {

  techanSvc: TechanService;

  constructor(
    private chartLayout: ChartLayoutMgr | undefined,
    private dataPoints: DataPoints,
    private dataService: ChartDataService)
  {
    this.techanSvc = new TechanService();
  }

  drawSma20() {

    const xScale = techan.scale.financetime()
      .domain(techan.scale.plot.time(this.dataService.ohlcdata).domain())
      .range([0, this.chartLayout!.plotOhlc.width - this.chartLayout!.axes.leftAxis - this.chartLayout!.axes.rightAxis]);

    const yScale = d3Scale.scaleLinear()
      .domain(techan.scale.plot.ohlc(this.dataService.ohlcdata.slice(23)).domain())
      .range([this.chartLayout!.plotOhlc.height, 0]);

    const techanSma20Plot =
      techan.plot.sma()
        .xScale(xScale)
        .yScale(yScale);

    const Chart = this.chartLayout!.plotGroup1.append('g')
      .attr('id', 'techan-sma20')
      .attr('transform', 'translate(0,0)');

    Chart!.append('rect')
      .attr('width', this.chartLayout!.plotOhlc.width)
      .attr('height', this.chartLayout!.plotOhlc.height)
      .attr('fill', 'transparent');

    const Data = Chart.append('g')
      .attr('id', 'Data_Sma20')
      .attr('class', 'sma20')
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis + ',0)');

    Data.datum(this.dataService.sma20).call(techanSma20Plot);
  }

}
