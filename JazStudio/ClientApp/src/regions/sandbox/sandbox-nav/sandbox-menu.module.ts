import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzMenusModule } from '../../../library/jz-ui-controls/jz-menus/jz-menus.module';
import { JzButtonsModule } from '../../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { SandboxMenuComponent } from './sandbox-menu/sandbox-menu.component';



@NgModule({
  declarations: [SandboxMenuComponent],
  imports: [
    CommonModule,
    JzMenusModule,
    JzButtonsModule
  ],
  exports: [SandboxMenuComponent]
})
export class SandboxMenuModule { }
