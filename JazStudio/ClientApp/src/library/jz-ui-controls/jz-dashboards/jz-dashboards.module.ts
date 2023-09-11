
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzDashboardPanelComponent } from './jz-dashboard-panel/jz-dashboard-panel.component';
import { JzDashboardContainerComponent } from './jz-dashboard-container/jz-dashboard-container.component';

@NgModule({
  declarations: [
    JzDashboardContainerComponent,
    JzDashboardPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JzDashboardContainerComponent,
    JzDashboardPanelComponent]
})
export class JzDashboardsModule { }
