import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzTechChartModule } from '../../../library/jz-components/jz-charts/jz-tech-chart/jz-tech-chart.module';
import { ViewTechnicalChartComponent } from './view-technical-chart/view-technical-chart.component';



@NgModule({
  declarations: [
    ViewTechnicalChartComponent
  ],
  imports: [
    CommonModule,
    JzTechChartModule
  ],
  exports: [
    ViewTechnicalChartComponent
  ],
})
export class ViewTechnicalChartModule { }
