import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzTechChartComponent } from './jz-tech-chart/jz-tech-chart.component';
import { JzTechnicalChartComponent } from './jz-technical-chart/jz-technical-chart.component';
import { ViewTechnicalChartRouter } from '../../../../views/charts/view-technical-chart/view-technical-chart/view-technical-chart-router.module';

@NgModule({
  declarations: [
    JzTechChartComponent,
    JzTechnicalChartComponent
  ],
  imports: [
    CommonModule,
    ViewTechnicalChartRouter
  ],
  exports: [
    JzTechChartComponent,
    JzTechnicalChartComponent
  ]
})
export class JzTechChartModule { }
