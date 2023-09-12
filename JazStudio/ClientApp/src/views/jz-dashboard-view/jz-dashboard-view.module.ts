import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzDashboardsModule } from '../../library/jz-components/jz-dashboards/jz-dashboards.module';
import { JzDashboardViewComponent } from './jz-dashboard-view/jz-dashboard-view.component';

@NgModule({
  declarations: [
    JzDashboardViewComponent
  ],
  imports: [
    CommonModule,
    JzDashboardsModule
  ],
  exports: [
    JzDashboardViewComponent
  ],
})
export class JzDashboardViewModule { }
