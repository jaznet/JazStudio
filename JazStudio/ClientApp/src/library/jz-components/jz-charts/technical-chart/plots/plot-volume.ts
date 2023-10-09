
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import { ChartLayoutMgr } from '../chart-elements/chart-layout-mgr';
import { DataPoints } from '../data-models/data-points';
import { ChartDataService } from '../data-models/chart-data.service';
import { TechanService } from '../../techan/techan.service';
import * as techan from 'techan';

export class PlotVolume {

  techanSvc: TechanService;

  constructor(
    private chartLayout: ChartLayoutMgr | undefined,
    private dataPoints: DataPoints,
    private dataService: ChartDataService)
  {
    this.techanSvc = new TechanService();
  }

  drawVolume() {

    const xScale = techan.scale.financetime()
      .domain(techan.scale.plot.time(this.dataService.ohlcdata).domain())
      .range([0, this.chartLayout!.plotOhlc.width - this.chartLayout!.axes.leftAxis - this.chartLayout!.axes.rightAxis]);

    const yScale = d3Scale.scaleLinear()
      .domain(techan.scale.plot.volume(this.dataService.ohlcdata).domain())
      .range([this.chartLayout!.plotVolume.height, 0]);

    const techanVolumePlot =
      techan.plot.volume()
        .accessor(techan.accessor.ohlc())
        .xScale(xScale)
        .yScale(yScale);

    const Chart = this.chartLayout!.plotGroup1.append('g')
      .attr('id', 'techan-volume')
      .attr('transform', 'translate(0,' + (this.chartLayout!.plotOhlc.height*.75) + ')');

    Chart!.append('rect')
      .attr('width', this.chartLayout!.plotOhlc.width)
      .attr('height', this.chartLayout!.plotOhlc.height * .25)
      .attr('fill', 'transparent');   

    // Axis
    const yAxisScale = d3Axis.axisRight(d3Scale.scaleLinear()
      .domain([this.dataPoints!.VolumeMax, this.dataPoints!.VolumeMin])
      .range([0, (this.chartLayout!.plotVolume.height)]));

    const yAxis = Chart.append('g')
      .attr('id', 'volume-axis')
      .attr('class', 'yaxis')
      .attr('transform', 'translate(' + this.chartLayout!.axes.leftAxis + ',0)');

    yAxis.append('rect')
      .attr('width', '40')
      .attr('height', this.chartLayout!.plotOhlc.height * .25);

    yAxis.call(yAxisScale);
  
    const Data = Chart.append('g')
      .attr('id', 'Data_Volume')
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis + ',0)');

    Data.datum(this.dataService.ohlcdata).call(techanVolumePlot);

  }
}
