import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { SyncChart1Component } from './sync-chart-1.component';
import { SyncChart1RouterModule } from './sync-chart-1-router.module';
import { JzSyncChart1Module } from '../../../library/jz-components/jz-charts/jz-sync-chart-1/jz-sync-chart-1.module';


@NgModule({
  declarations: [
    SyncChart1Component
  ],
  imports: [
    CommonModule,
    SyncChart1RouterModule,
    JzSyncChart1Module
  ],
  exports: [
    SyncChart1Component
  ]
})
export class SyncChart1Module { }
