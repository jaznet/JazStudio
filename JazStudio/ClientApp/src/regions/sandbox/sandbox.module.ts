import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox/sandbox.component';
import { RouterModule } from '@angular/router';
import { SandboxMenuComponent } from './sandbox-nav/sandbox-menu/sandbox-menu.component';
import { JzMenusModule } from '../../library/jz-ui-controls/jz-menus/jz-menus.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { SandboxRoutingModule } from './sandbox-nav/sandbox-routing.module';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { SyncDashModule } from '../../views/sync-dash/sync-dash.module';

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
    SyncDashModule
  ],
  exports: [
    SandboxComponent,
    SandboxMenuComponent
  ]
})
export class SandboxModule { }
