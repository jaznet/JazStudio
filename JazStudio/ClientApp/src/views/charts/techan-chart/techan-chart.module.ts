import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechanChartComponent } from './techan-chart.component';
import { TechanChartRouterModule } from './techan-chart-router.module';



@NgModule({
  declarations: [
    TechanChartComponent
  ],
  imports: [
    CommonModule,
    TechanChartRouterModule
  ],
  exports: [
    TechanChartComponent
  ]
})
export class TechanChartModule { }
