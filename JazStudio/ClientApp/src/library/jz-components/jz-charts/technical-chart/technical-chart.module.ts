import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalChartComponent } from './technical-chart.component';



@NgModule({
  declarations: [TechnicalChartComponent],
  imports: [
    CommonModule
  ],
  exports: [TechnicalChartComponent],
})
export class TechnicalChartModule { }
