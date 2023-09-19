import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTechnicalChartComponent } from './view-technical-chart/view-technical-chart.component';
import { ViewTechnicalChartRouterModule } from './view-technical-chart/view-technical-chart-router.module';



@NgModule({
  declarations: [
    ViewTechnicalChartComponent
  ],
  imports: [
    CommonModule,
    ViewTechnicalChartRouterModule
  ],
  exports: [
    ViewTechnicalChartComponent
  ],
})
export class ViewTechnicalChartModule { }
