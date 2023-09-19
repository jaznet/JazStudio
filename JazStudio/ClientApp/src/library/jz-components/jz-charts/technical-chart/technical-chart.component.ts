import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as techan from 'techan';
import { HttpErrorPopoverComponent } from '../../../library/popups/http-error-popover/http-error-popover.component';
import { LoadingPopoverComponent } from '../../../library/popups/loading-popover/loading-popover.component';
import { PopupsService } from '../../../library/popups/popups-svc/popups.service';
import { StockPriceHistory } from '../../../models/stock-price-history';
import { EquitiesService } from '../../../services/equities.service';
import { FinanceService } from '../../../services/finance.service';
import { UiViewBaseComponent } from '../../ui/ui-view-base/ui-view-base.component';
import { Axes } from './chart-elements/axes';
import { ChartLayoutMgr } from './chart-elements/chart-layout-mgr';
import { Scales } from './chart-elements/scales';
import { ChartDataService } from './data-models/chart-data.service';
import { DataPoints } from './data-models/data-points';
import { OhlcData } from './data-models/ohlc-data';
import { PlotCandlesticks } from './plots/plot-candlesticks';
import { PlotEma } from './plots/plot-ema';
import { PlotMacd } from './plots/plot-macd';
import { PlotRsi } from './plots/plot-rsi';
import { PlotSma10 } from './plots/plot-sma10';
import { PlotSma20 } from './plots/plot-sma20';
import { PlotVolume } from './plots/plot-volume';

@Component({
  selector: 'technical-chart',
  templateUrl: './technical-chart.component.html',
  styleUrls: ['./technical-chart.component.css']
})
export class TechnicalChartComponent extends UiViewBaseComponent implements OnInit, AfterViewInit {

  @HostBinding('class') classes = 'view-component';
 
  //@ViewChild('httperrorpopover', { static: false }) httpErrorPopOver: HttpErrorPopoverComponent | any;
  //@ViewChild('loadingpopover', { static: false }) loadingpopover: LoadingPopoverComponent | any;

 
  svgElement: d3.Selection<SVGSVGElement, unknown, HTMLElement, any> | undefined;
  chartLayout: ChartLayoutMgr | undefined;
  axes: Axes | undefined;
  data: StockPriceHistory[] | undefined;
  ohlcData: OhlcData[] = [];
  dataPoints: DataPoints | undefined;
  scales: Scales | undefined;
  PlotCandlesticks: PlotCandlesticks | undefined;
  volumePlot: PlotVolume | undefined;
  macdPlot: PlotMacd | undefined;
  rsiPlot: PlotRsi | undefined;
  sma10Plot: PlotSma10 | undefined;
  sma20Plot: PlotSma20 | undefined;
  emaPlot: PlotEma | undefined;

  constructor(
    popupsSvc: PopupsService,
     elementRef: ElementRef,
    private equitiesService: EquitiesService,
    private financeService: FinanceService,
    private changeDetector: ChangeDetectorRef,
    private dataService: ChartDataService) {
    super(popupsSvc, elementRef);
    this.target = 'technicalchart';
   
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
  
    super.ngAfterViewInit();
    var techanTime = techan.scale.financetime().range([0, 100]);
  
    this.loading('technicalchart', 'loading', 'finance/GetHistory', 'jaz');

    this.financeService.getHistory().subscribe((data: any) => {
      console.log(data);
      this.data = data;
      this.dataService.mapData(data);
      this.loadingpopover.isPopupVisible = false;
      this.createTechnicalChart();
    },
      (error: HttpErrorResponse) => {
        this.loadingpopover.isPopupVisible = false;
        this.onHttpError('technicalchart', error.status, error.statusText, error.url, error.error);
        console.log('error', error.error);
      }
    );
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  createTechnicalChart() {
    this.chartLayout = new ChartLayoutMgr(this.width, this.height);
    this.dataPoints = new DataPoints(this.data);
    this.axes = new Axes(this.chartLayout, this.dataPoints);
    this.scales = new Scales(this.chartLayout, this.data, this.dataPoints, this.ohlcData);
    this.PlotCandlesticks = new PlotCandlesticks(this.chartLayout, this.dataService);
    this.volumePlot = new PlotVolume(this.chartLayout, this.dataPoints, this.dataService);
    this.macdPlot = new PlotMacd(this.chartLayout, this.dataPoints, this.dataService);
    this.rsiPlot = new PlotRsi(this.chartLayout, this.dataPoints, this.dataService);
    this.sma10Plot = new PlotSma10(this.chartLayout, this.dataPoints, this.dataService);
    this.sma20Plot = new PlotSma20(this.chartLayout, this.dataPoints, this.dataService);
    this.emaPlot = new PlotEma(this.chartLayout, this.dataPoints, this.dataService);

    this.svgElement = d3.select('#svgContainer').append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('class', 'svgElement');

    this.svgElement.append('rect')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('fill', 'var(--jz-palette-color-1')
      .attr('class', 'svgElementRect');

    this.chartLayout.drawMargins(this.svgElement);
    this.chartLayout.drawPlotAreas(this.svgElement);
    this.PlotCandlesticks.drawTechanCandlesticks(this.chartLayout.plotGroup1);
    this.volumePlot.drawVolume();
    this.macdPlot.drawMacd();
    this.rsiPlot.drawRsi();
    this.axes.drawAxes(this.svgElement);
    this.sma10Plot.drawSma10();
    this.sma20Plot.drawSma20();
    this.emaPlot.drawEma();
  }

}
