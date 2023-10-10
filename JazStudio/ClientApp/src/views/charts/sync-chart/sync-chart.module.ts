import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncChartComponent } from './sync-chart.component';
import { SyncChartRouterModule } from './sync-chart-router.module';



@NgModule({
  declarations: [
    SyncChartComponent
  ],
  imports: [
    CommonModule,
    SyncChartRouterModule
  ],
  exports: [
    SyncChartComponent
  ]
})
export class ViewSyncChartModule { }
