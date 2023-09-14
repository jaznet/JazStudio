import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTechnicalChartComponent } from './view-technical-chart/view-technical-chart.component';
import { JzTechnicalChartModule } from '../../../library/jz-components/jz-charts/jz-technical-chart/jz-technical-chart.module';
import { ViewTechnicalChartRouter } from './view-technical-chart/view-technical-chart-router.module';



@NgModule({
  declarations: [
    ViewTechnicalChartComponent
  ],
  imports: [
    CommonModule,
    ViewTechnicalChartRouter,
    JzTechnicalChartModule
  ],
  exports: [
    ViewTechnicalChartComponent
  ],
})
export class ViewTechnicalChartModule { }
