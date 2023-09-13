import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox/sandbox.component';
import { RouterModule } from '@angular/router';
import { SandboxMenuComponent } from './sandbox-nav/sandbox-menu/sandbox-menu.component';
import { JzMenusModule } from '../../library/jz-components/jz-menus/jz-menus.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { SandboxRoutingModule } from './sandbox-nav/sandbox-routing.module';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { SyncDashModule } from '../../views/sync-dash/sync-dash.module';
import { JzDashboardViewModule } from '../../views/jz-dashboard-view/jz-dashboard-view.module';
import { ChoroUSAModule } from '../../views/choro-usa/choro-usa.module';
import { TechnicalChartViewModule } from '../../views/charts/technical-chart-view/technical-chart-view.module';

@NgModule({
  declarations: [
    SandboxComponent,
    SandboxMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SandboxRoutingModule,
    JzMenusModule,
    JzButtonsModule,
    SyncDashModule,
    JzDashboardViewModule,
   
    ChoroUSAModule,
    TechnicalChartViewModule,
  ],
  exports: [
    SandboxComponent,
    SandboxMenuComponent
  ]
})
export class SandboxModule { }
