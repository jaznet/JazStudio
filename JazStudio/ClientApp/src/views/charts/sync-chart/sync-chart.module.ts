import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncChartComponent } from './sync-chart.component';
import { SyncChartRouterModule } from './sync-chart-router.module';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { JzSyncChartModule } from '../../../library/jz-components/jz-charts/jz-sync-chart/jz-sync-chart.module';


@NgModule({
  declarations: [
    SyncChartComponent
  ],
  imports: [
    CommonModule,
    SyncChartRouterModule,
    JzSyncChartModule
  ],
  exports: [
    SyncChartComponent
  ]
})
export class SyncChartModule { }
