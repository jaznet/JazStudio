import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox/sandbox.component';
import { RouterModule } from '@angular/router';
import { SandboxMenuComponent } from './sandbox-nav/sandbox-menu/sandbox-menu.component';
import { JzMenusModule } from '../../library/jz-ui-controls/jz-menus/jz-menus.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { SandboxRoutingModule } from './sandbox-nav/sandbox-routing.module';

@NgModule({
  declarations: [
    SandboxComponent,
    SandboxMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    JzMenusModule,
    JzButtonsModule,
    SandboxRoutingModule
  ],
  exports: [
    SandboxComponent,
    SandboxMenuComponent
  ]
})
export class SandboxModule { }
