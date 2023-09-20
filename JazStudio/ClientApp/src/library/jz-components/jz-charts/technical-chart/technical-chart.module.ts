import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalChartComponent } from './technical-chart.component';
import { PopupsModule } from '../../../jz-ui-controls/j3-popups/popups.module';


@NgModule({
  declarations: [TechnicalChartComponent],
  imports: [
    CommonModule,
    PopupsModule
  ],
  exports: [TechnicalChartComponent],
})
export class TechnicalChartModule { }
