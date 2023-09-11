import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzDashViewComponent } from './jz-dash-view/jz-dash-view.component';
import { JzDashboardsModule } from '../../library/jz-components/jz-dashboards/jz-dashboards.module';



@NgModule({
  declarations: [
    JzDashViewComponent
  ],
  imports: [
    CommonModule,
    JzDashboardsModule
  ],
  exports: [
    JzDashViewComponent
  ],
})
export class JzDashViewModule { }
