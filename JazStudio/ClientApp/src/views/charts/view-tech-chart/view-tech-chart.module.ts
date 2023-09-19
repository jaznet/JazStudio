import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTechChartComponent } from './view-tech-chart/view-tech-chart.component';
import { JzTechnicalChartModule } from '../../../library/jz-components/jz-charts/jz-technical-chart/jz-technical-chart.module';
import { ViewTechChartRouter } from './view-tech-chart/view-tech-chart-router.module';



@NgModule({
  declarations: [
    ViewTechChartComponent
  ],
  imports: [
    CommonModule,
    ViewTechChartRouter,
    JzTechnicalChartModule
  ],
  exports: [
    ViewTechChartComponent
  ],
})
export class ViewTechChartModule { }
