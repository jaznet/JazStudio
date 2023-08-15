import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { J3StudioComponent } from './j3-studio.component';
import { J3StudioRouterModule } from './j3-studio-router.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { AppMenusModule } from '../../library/app-menus/app-menus.module';



@NgModule({
  declarations: [
    J3StudioComponent
  ],
  imports: [
    CommonModule,
    J3StudioRouterModule,
    JzButtonsModule,
    AppMenusModule
  ],
  exports: [
    J3StudioComponent
  ],
})
export class J3StudioModule { }
