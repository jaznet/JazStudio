import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzSyncChart2Component } from './jz-sync-chart-2.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';



@NgModule({
  declarations: [
    JzSyncChart2Component
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    JzSyncChart2Component
  ],
})
export class JzSyncChart2Module { }
