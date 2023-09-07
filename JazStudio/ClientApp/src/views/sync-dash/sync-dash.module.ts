import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncDashComponent } from './sync-dash/sync-dash.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';



@NgModule({
  declarations: [
    SyncDashComponent
  ],
  imports: [
    CommonModule,
    DashboardLayoutModule
  ],
  exports: [
    SyncDashComponent
  ]
})
export class SyncDashModule { }
