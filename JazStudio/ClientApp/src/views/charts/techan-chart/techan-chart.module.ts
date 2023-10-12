import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechanChartComponent } from './techan-chart.component';
import { TechanChartRouterModule } from './techan-chart-router.module';
import { JzTechanChartModule } from '../../../library/jz-components/jz-charts/jz-techan-chart/jz-techan-chart.module';



@NgModule({
  declarations: [
    TechanChartComponent
  ],
  imports: [
    CommonModule,
    TechanChartRouterModule,
    JzTechanChartModule
  ],
  exports: [
    TechanChartComponent
  ]
})
export class TechanChartModule { }
