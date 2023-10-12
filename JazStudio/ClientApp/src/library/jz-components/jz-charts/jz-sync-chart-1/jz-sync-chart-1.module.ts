import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzSyncChart1Component } from './jz-sync-chart-1.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';



@NgModule({
  declarations: [
    JzSyncChart1Component
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    JzSyncChart1Component
  ],
})
export class JzSyncChart1Module { }
