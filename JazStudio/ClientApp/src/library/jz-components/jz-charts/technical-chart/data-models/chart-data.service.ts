import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { TechanService } from '../../techan/techan.service';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  ohlcdata: any;
  macddata: any;
  rsidata: any;
  sma10: any;
  sma20: any;
  ema: any;

  constructor(private techanSvc: TechanService) { }

  mapData(data: any) {

    const parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S");
    let techanCandlesticksPlot: any = this.techanSvc.plotCandlestick;

    let accessor = techanCandlesticksPlot.accessor();

    this.ohlcdata = data!.map(function (d: any) {
      return {
        date: parseDate(d.Date.toString()),
        open: +d.Open,
        high: +d.High,
        low: +d.Low,
        close: +d.Close,
        volume: +d.Volume
      };
    }).sort(function (a: any, b: any) { return d3.ascending(accessor.d(a), accessor.d(b)); });

    //this.macddata = this.techanSvc.techan.indicator.macd()(this.ohlcdata);
    //this.rsidata = this.techanSvc.techan.indicator.rsi()(this.ohlcdata);
    //this.sma10 = this.techanSvc.techan.indicator.sma().period(10)(this.ohlcdata);
    //this.sma20 = this.techanSvc.techan.indicator.sma().period(20)(this.ohlcdata);
    //this.ema = this.techanSvc.techan.indicator.ema().period(50)(this.ohlcdata);
  }
}
