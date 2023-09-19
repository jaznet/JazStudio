export interface StockPriceHistory {
  Id: number;
  Timestamp: Date;
  Ticker: string;
  Date: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
}
