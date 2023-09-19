import * as d3Axis from 'd3-axis';
import { ChartLayoutMgr } from './chart-layout-mgr';
import * as d3Scale from 'd3-scale';
import * as d3TimeFormat from 'd3-time-format';
import { DataPoints } from '../data-models/data-points';
import * as d3 from 'd3';

export class Axes {
  xScale: any;
  xAxis: any;
  _dataPoints;

  constructor(private chartLayout: ChartLayoutMgr | undefined, dataPoints: DataPoints | undefined) {
    this._dataPoints = dataPoints;
  }

  drawAxes(svg: any) {
    const MarginLeft = svg
      .append('g')
      .attr('id', 'MarginLeft')
      .attr('transform', 'translate(0,' + this.chartLayout!.margins.topMargin + ')') ;

    MarginLeft
      .append('rect')
      .attr('class', 'margin')
      .attr('width', this.chartLayout!.margins.leftMargin)
      .attr('height', this.chartLayout!.plotArea.height)
      .attr('fill', 'transparent');

    const MarginRight =
      svg
      .append('g')
      .attr('id', 'yAxisRight')
      .attr('transform', 'translate(' +
        (this.chartLayout!.width! - this.chartLayout!.margins.rightMargin)
        + ',' + this.chartLayout!.margins.topMargin + ')');

    MarginRight
      .append('rect')
      .attr('width', this.chartLayout!.margins.rightMargin)
      .attr('height', this.chartLayout!.plotArea.height)
      .attr('fill', 'transparent');

    // XAXIS
    const xaxisX = this.chartLayout!.axes.leftAxis + this.chartLayout!.margins.leftMargin;
    const xaxisY = this.chartLayout!.height! - this.chartLayout!.margins.bottomMargin;
    const yaxisX = this.chartLayout!.plotArea.width - this.chartLayout!.margins.rightMargin;;
    const yaxisY = this.chartLayout?.margins.topMargin;

    const xAxis = d3Axis.axisBottom(d3Scale.scaleTime()
      .domain([new Date(this._dataPoints!.DateLow!), new Date(this._dataPoints!.DateHigh!)])
      .range([0, this.chartLayout!.width!
        - this.chartLayout!.axes.leftAxis - this.chartLayout!.axes.rightAxis
        - this.chartLayout!.margins.leftMargin - this.chartLayout!.margins.rightMargin]));

    const xaxes = svg!.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(' + xaxisX + ',' + (xaxisY+4) + ')')
      .call(xAxis);

    //const yScale = d3.scaleLinear().range([400, 0]);
    //const yAxis = d3.axisRight(yScale);

    //const yaxes = svg!.append('g')
    //  .attr('class', 'y-axis')
    //  .attr('transform', 'translate(' + yaxisX + ',' + (yaxisY! + 4) + ')')
    //  .call(yAxis);
  }
}
