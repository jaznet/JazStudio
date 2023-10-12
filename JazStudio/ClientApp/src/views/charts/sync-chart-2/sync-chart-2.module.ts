import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncChart2Component } from './sync-chart-2.component';
import { JzSyncChart2Module } from '../../../library/jz-components/jz-charts/jz-sync-chart-2/jz-sync-chart-2.module';
import { SyncChart2RouterModule } from './sync-chart-2-router.module';



@NgModule({
  declarations: [
    SyncChart2Component
  ],
  imports: [
    CommonModule,
    SyncChart2RouterModule,
    JzSyncChart2Module
  ],
  exports: [
    SyncChart2Component
  ],
})
export class SyncChart2Module { }
