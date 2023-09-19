export class ChartLayoutMgr {

  width;
  height;
  margins: { topMargin: number, rightMargin: number, bottomMargin: number, leftMargin: number };
  axes: { topAxis: number, rightAxis: number, bottomAxis: number, leftAxis: number };
  rowspace: number = 4;
  plotAreaGrp: any | undefined;
  plotArea: { width: number, height: number };
  plotGroup1: any | undefined;
  plotOhlc: { width: number, height: number };
  plotVolume: { width: number, height: number };
  plotGroup2: any | undefined;
  plotMacd: { width: number, height: number };
  plotGroup3: any | undefined;
  plotRsi: { width: number, height: number };

  coords: {
    ohlc: { height: number, padding: number; top: number, bottom: number },
    indicator1: { height: number, padding: number; top: number, bottom: number },
    indicator2: { height: number, padding: number; top: number, bottom: number }
  };

  constructor(width: number | undefined, height: number | undefined) {
    this.width = width;
    this.height = height;
    this.margins = { topMargin: 0, rightMargin: 8, bottomMargin: 30, leftMargin: 8, };
    this.axes = { topAxis: 30, rightAxis: 40, bottomAxis: 30, leftAxis: 40, };
    this.plotArea = {
      width: width! - this.margins.leftMargin - this.margins.rightMargin,
      height: height! - this.margins.topMargin - this.margins.bottomMargin
    };
    this.plotOhlc = { width: this.plotArea.width, height: (this.plotArea.height - 8) * .65 };
    this.plotVolume = { width: this.plotArea.width, height: this.plotOhlc.height * .25 };
    this.plotGroup2 = {
      width: this.plotArea.width,
      height: 100
    };
    this.plotMacd = { width: this.plotArea.width, height: (this.plotArea.height - 8) * .175 };
    this.plotRsi = { width: this.plotArea.width, height: (this.plotArea.height - 8) * .175 };

    this.coords = {
      ohlc: { height: 100, padding: 0, top: 100, bottom: 100 },
      indicator1: { height: 200, padding: 0, top: 200, bottom: 200 },
      indicator2: { height: 300, padding: 0, top: 300, bottom: 300 },
    };
  }

  drawMargins(svg: any) {
    let that = this;
    const marginsGroup = svg!.append('g')
      .attr('class', 'margins');

    marginsGroup.append('line')
      .attr('id', 'left-margin')
      .attr('x1', this.margins.leftMargin)
      .attr('y1', 0)
      .attr('x2', this.margins.leftMargin)
      .attr('y2', this.height)
    
      .attr('stroke-dasharray', '4');

    marginsGroup.append('line')
      .attr('id', 'right-margin')
      .attr('x1', this.width! - this.margins.rightMargin)
      .attr('y1', 0)
      .attr('x2', this.width! - this.margins.rightMargin)
      .attr('y2', this.height)
      
      .attr('stroke-dasharray', '4');

    marginsGroup.append('line')
      .attr('id', 'top-margin')
      .attr('x1', 0)
      .attr('y1', this.margins.topMargin)
      .attr('x2', this.width)
      .attr('y2', this.margins.topMargin)
     
      .attr('stroke-dasharray', '4');

    marginsGroup.append('line')
      .attr('id', 'bottom-margin')
      .attr('x1', 0)
      .attr('y1', this.height! - this.margins.bottomMargin)
      .attr('x2', this.width)
      .attr('y2', this.height! - this.margins.bottomMargin)
     
      .attr('stroke-dasharray', '4');
  }

  drawPlotAreas(svg: any) {

    this.plotAreaGrp = svg.append('g')
      .attr('id', 'plotAreaGroup')
      .attr('transform', 'translate(' + this.margins.leftMargin + ',' + this.margins.topMargin + ')');

    this.plotAreaGrp!
      .append('rect')
      .attr('id', 'plotAreaRect')
      .attr('width', this.width! - this.margins.leftMargin - this.margins.rightMargin)
      .attr('height', this.height! - this.margins.topMargin - this.margins.bottomMargin)
      .attr('fill', 'transparent');


    this.plotGroup1 = this.plotAreaGrp!.append('g').attr('id', 'plotGroup1');

    this.plotGroup1
      .append('rect')
      .attr('id', 'plotGroup1-rect')
      .attr('width', this.width! - this.margins.leftMargin! - this.margins.rightMargin!)
      .attr('height',
        (this.height! - this.margins.topMargin - this.margins.bottomMargin) * .65)
      .attr('fill', 'transparent');

    this.plotAreaGrp
      .append('rect')
      .attr('id', 'group space 1')
      .attr('class', 'group-space')
      .attr('width', this.width! - this.margins.leftMargin! - this.margins.rightMargin!)
      .attr('height', this.rowspace)
      .attr('fill', 'transparent')
      .attr('transform', 'translate(0,' + (this.plotOhlc.height) + ')');

    // MACD
    this.plotGroup2 = this.plotAreaGrp.append('g')
      .attr('id', 'macdGroup')
      .attr('transform', 'translate(0,' + ((this.plotOhlc.height) + this.rowspace) + ')');

    this.plotGroup2
      .append('rect')
      .attr('id', 'plotGroup2-rect')
      .attr('width', this.width! - this.margins.leftMargin! - this.margins.rightMargin!)
      .attr('height',
        (this.height! - this.margins.topMargin - this.margins.bottomMargin) * .175)
      .attr('fill', 'transparent');

    this.plotAreaGrp
      .append('rect')
      .attr('id', 'group space 2')
      .attr('width', this.width! - this.margins.leftMargin! - this.margins.rightMargin!)
      .attr('height', this.rowspace)
      .attr('fill', 'transparent')
      .attr('transform', 'translate(0,' + (this.plotOhlc.height + this.rowspace + this.plotMacd.height) + ')');

    // RSI
    this.plotGroup3 = this.plotAreaGrp.append('g')
      .attr('id', 'plotGroup3')
      .attr('transform', 'translate(0,' + (this.plotOhlc.height + (this.rowspace * 2) + this.plotMacd.height) + ')');

    this.plotGroup3
      .append('rect')
      .attr('id', 'plotGroup3-rect')
      .attr('width', this.width! - this.margins.leftMargin! - this.margins.rightMargin!)
      .attr('height',
        (this.height! - this.margins.topMargin - this.margins.bottomMargin) * .175)
      .attr('fill', 'transparent');


  }
}
