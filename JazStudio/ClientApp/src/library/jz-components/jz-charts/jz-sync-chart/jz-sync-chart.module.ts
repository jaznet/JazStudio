import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzSyncChartComponent } from './jz-sync-chart.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';



@NgModule({
  declarations: [
    JzSyncChartComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    JzSyncChartComponent
  ],
})
export class JzSyncChartModule { }
