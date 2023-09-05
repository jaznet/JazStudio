import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JazStudioRouterModule } from './jaz-studio-router.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { AppMenusModule } from '../../app/app-menus/app-menus.module';
import { JazStudioHomeComponent } from './jaz-studio-home/jaz-studio-home.component';
import { JazStudioViewComponent } from './jaz-studio-view/jaz-studio-view.component';
import { JazStudioHome1Component } from './jaz-studio-home1/jaz-studio-home1.component';


@NgModule({
  declarations: [
    JazStudioViewComponent,
    JazStudioHomeComponent,
    JazStudioHome1Component
  ],
  imports: [
    CommonModule,
    JazStudioRouterModule,
    JzButtonsModule,
    AppMenusModule
  ],
  exports: [
    JazStudioViewComponent
  ],
})
export class JazStudioModule { }
