import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalChartViewComponent } from './technical-chart-view/technical-chart-view.component';
import { JzTechChartModule } from '../../../library/jz-components/jz-charts/jz-tech-chart/jz-tech-chart.module';



@NgModule({
  declarations: [
    TechnicalChartViewComponent
  ],
  imports: [
    CommonModule,
    JzTechChartModule
  ],
  exports: [
    TechnicalChartViewComponent
  ],
})
export class TechnicalChartViewModule { }
