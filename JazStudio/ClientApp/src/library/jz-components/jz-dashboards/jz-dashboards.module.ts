
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzDashboardPanelComponent } from './jz-dashboard-panel/jz-dashboard-panel.component';
import { JzDashboardLayoutComponent } from './jz-dashboard-layout/jz-dashboard-layout.component';

@NgModule({
  declarations: [
    JzDashboardLayoutComponent,
    JzDashboardPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JzDashboardLayoutComponent,
    JzDashboardPanelComponent]
})
export class JzDashboardsModule { }
