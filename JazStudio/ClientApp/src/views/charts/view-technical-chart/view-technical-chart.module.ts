import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTechnicalChartComponent } from './view-technical-chart/view-technical-chart.component';
import { ViewTechnicalChartRouterModule } from './view-technical-chart/view-technical-chart-router.module';
import { TechnicalChartModule } from '../../../library/jz-components/jz-charts/technical-chart/technical-chart.module';



@NgModule({
  declarations: [
    ViewTechnicalChartComponent
  ],
  imports: [
    CommonModule,
    ViewTechnicalChartRouterModule,
    TechnicalChartModule
  ],
  exports: [
    ViewTechnicalChartComponent
  ],
})
export class ViewTechnicalChartModule { }
