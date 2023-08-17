import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JazStudioComponent } from './jaz-studio.component';
import { JazStudioRouterModule } from './jaz-studio-router.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { AppMenusModule } from '../../library/app-menus/app-menus.module';



@NgModule({
  declarations: [
    JazStudioComponent
  ],
  imports: [
    CommonModule,
    JazStudioRouterModule,
    JzButtonsModule,
    AppMenusModule
  ],
  exports: [
    JazStudioComponent
  ],
})
export class JazStudioModule { }
