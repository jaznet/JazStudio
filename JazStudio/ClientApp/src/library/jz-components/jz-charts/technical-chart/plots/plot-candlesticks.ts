
import * as d3 from 'd3';
import * as techan from 'techan';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import { ChartLayoutMgr } from '../chart-elements/chart-layout-mgr';
import { ChartDataService } from '../data-models/chart-data.service';

export class PlotCandlesticks {

  constructor(
    private chartLayout: ChartLayoutMgr | undefined,
    private dataService: ChartDataService  )
  { }

  drawTechanCandlesticks(svg: any) {

    
   
    const xScale = techan.scale.financetime()
      .domain(techan.scale.plot.time(this.dataService.ohlcdata).domain())
      .range([0, this.chartLayout!.plotOhlc.width - this.chartLayout!.axes.leftAxis - this.chartLayout!.axes.rightAxis]);
      
    const yScale = d3Scale.scaleLinear()
      .domain(techan.scale.plot.ohlc(this.dataService.ohlcdata.slice(23)).domain())
      .range([this.chartLayout!.plotOhlc.height, 0]);

    const techanCandlesticksPlot = techan.plot.candlestick()
      .xScale(xScale)
      .yScale(yScale);

    const accessor = techanCandlesticksPlot.accessor();
    //const yPercent = d3Scale.scaleLinear()
    //  .domain(techan.scale.plot.percent(yScale, this.dataService.ohlcdata.domain()))
    //  .range([this.chartLayout!.plotOhlc.height, 0]);

    const Chart = this.chartLayout!.plotGroup1.append('g')
      .attr('id', 'techan-candlesticks')
      .attr('transform', 'translate(0,0)');

    Chart.append('rect')
      .attr('id', 'rect-candlesticks')
      .attr('width', this.chartLayout!.plotOhlc.width)
      .attr('height', this.chartLayout!.plotOhlc.height)
      .attr('fill', 'transparent');

    const AxisLeft = Chart.append('g')
      .attr('id', 'yaxis left candlestick')
      .attr('class', 'yaxis left')
      .attr('transform', 'translate(' +this.chartLayout?.axes.leftAxis + ',0)');
   
    AxisLeft
      .append('rect')
      .attr('width', this.chartLayout?.axes.leftAxis)
      .attr('height', this.chartLayout?.plotOhlc.height);

    const yAxisL = d3Axis.axisLeft(yScale);
    AxisLeft.call(yAxisL);

    const Data = Chart.append('g')
      .attr('id', 'Data_Ohlc')  
      .attr('transform', 'translate(' + this.chartLayout?.axes.leftAxis + ',0)');

    Data.datum(this.dataService.ohlcdata).call(techanCandlesticksPlot);

    const AxisRight = Chart.append('g')
      .attr('id', 'yaxis right')
      .attr('class', 'yaxis right')
      .attr('transform', 'translate(' + (this.chartLayout!.plotOhlc.width - this.chartLayout!.axes.rightAxis) + ',0)');

    AxisRight
      .append('rect')
      .attr('width', this.chartLayout?.axes.rightAxis)
      .attr('height', this.chartLayout?.plotOhlc.height);

    const yAxisR = d3Axis.axisRight(yScale);
    AxisRight.call(yAxisR);

    this.chartLayout?.plotGroup1
      .append('text')
      .text('Ohlc')
      .attr('x', this.chartLayout.axes.leftAxis + 8)
      .attr('y', 21.5)
      .attr('class', 'subplot')
      .attr('fill', 'white');
  }
}
