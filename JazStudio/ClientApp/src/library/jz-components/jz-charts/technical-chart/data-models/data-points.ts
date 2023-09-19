
import { DSVRowArray } from "d3-dsv";
import { StockPriceHistory } from "./stock-price-history";
/*import { StockPriceHistory } from "../../../../models/stock-price-history";*/

export class DataPoints {
 Low: number = Number.MAX_SAFE_INTEGER;
 High: number = Number.MIN_SAFE_INTEGER;
 Volume: number = 0;
 VolumeMin: number = Number.MAX_SAFE_INTEGER;
 VolumeMax: number = Number.MIN_SAFE_INTEGER;
 DateLow: string | number | Date | undefined;
 DateHigh: string |number | Date | undefined;
 OpenLow: number = Number.MAX_SAFE_INTEGER;
 OpenHigh: number = Number.MIN_SAFE_INTEGER;
 CloseLow: number = Number.MAX_SAFE_INTEGER;
 CloseHigh: number = Number.MIN_SAFE_INTEGER;
 OpenCloseMin = Number.MAX_SAFE_INTEGER;
 OpenCloseMax = Number.MIN_SAFE_INTEGER;

  constructor(data: StockPriceHistory[] | d3.DSVRowArray<string> | undefined) {
    this.calculateDataPoints(data);
  }

  calculateDataPoints(data: StockPriceHistory[] | d3.DSVRowArray<string> | undefined) {
  
    this.DateLow = data![0].Date;
    this.DateHigh = data![0].Date;

    data!.forEach((item: any) => {
      if (item.Low < this.Low) {
        this.Low = item.Low;
      }
      if (item.High > this.High) { this.High = item.High; }
      if (item.Volume > this.Volume) { this.Volume = item.Volume; }
      if (item.Date < this.DateLow!) {
        this.DateLow = item.Date;
      }
      if (item.Date > this.DateHigh!) {
        this.DateHigh = item.Date;
      }

      if (item.Open < this.OpenLow) {
        this.OpenLow = item.Open;
      }
      if (item.Open < this.OpenCloseMin) {
        this.OpenCloseMin = item.Open;
      }
      if (item.Open > this.OpenHigh) {
        this.OpenHigh = item.Open;
      }
      if (item.Open > this.OpenCloseMax) {
        this.OpenCloseMax + item.Open;
      }
      if (item.Close < this.CloseLow) {
        this.CloseLow = item.Close;
      }
      if (item.Close < this.OpenCloseMin) {
        this.OpenCloseMin = item.Close;
      }
      if (item.Close > this.CloseHigh) {
        this.CloseHigh = item.Close;
      }
      if (item.Close > this.OpenCloseMax) {
        this.OpenCloseMax = item.Close;
      }
      if (item.Volume > this.VolumeMax) {
        this.VolumeMax = item.Volume;
      }
      if (item.Volume < this.VolumeMin) {
        this.VolumeMin = item.Volume;
      }
    })

  }
}
