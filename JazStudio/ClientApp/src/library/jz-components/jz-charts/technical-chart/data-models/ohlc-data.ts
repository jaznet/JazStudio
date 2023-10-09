

export class OhlcData {

  date: string='';
  open: number = 0;
  high: number = 0;
  low: number = 0;
  close: number = 0;
  volume: number = 0;

  constructor(
    date: string,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number)
  {
    this.date = date;
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
    this.volume = volume;
  }
}
