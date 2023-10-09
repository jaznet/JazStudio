import { DSVRowArray } from 'd3-dsv';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import { ChartLayoutMgr } from './chart-layout-mgr';
import { DataPoints } from '../data-models/data-points';
import { OhlcData } from '../data-models/ohlc-data';
import { StockPriceHistory } from '../data-models/stock-price-history';
import { TechanService } from '../../techan/techan.service';
import { ChartDataService } from '../data-models/chart-data.service';

export class Scales {

  data;
  _datapoints;
  xDateScale: any;
  _priceRangleScale: any;
  techanSvc: TechanService;
  chartDataService: ChartDataService | undefined;

  constructor(
    private chartLayout: ChartLayoutMgr | undefined,
    data: StockPriceHistory[] | undefined,
    dataPoints: DataPoints | undefined,
    private Data_Ohlc: OhlcData[] | undefined
    
  )
  {
    this.techanSvc = new TechanService();
    this.chartDataService = new ChartDataService();
    this.data = data;
    this._datapoints = dataPoints;
  /*  const dom = this.techanSvc.calculateTimeScaleDomain(this.chartDataService.ohlcdata);*/

    console.log(Data_Ohlc);
   
    //this.xDateScale = 
    //  this.techanSvc.calculateTimeScaleDomain(this.chartDataService.ohlcdata)
    //  .domain(this.techanSvc.time(Data_Ohlc!).domain())
    //    .range([0, this.chartLayout!.width! - this.chartLayout!.margins.leftMargin - this.chartLayout!.margins.rightMargin]);

    //this._priceRangleScale = d3Scale.scaleLinear()
    //  .domain([this._datapoints!.Low, this._datapoints!.High])
    //  .range([this.chartLayout!.plotOhlc.height, 0]);
  }
}
