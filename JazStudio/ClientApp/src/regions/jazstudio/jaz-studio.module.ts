import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JazStudioRouterModule } from './jaz-studio-router.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { AppMenusModule } from '../../app/app-menus/app-menus.module';
import { JazStudioViewComponent } from './jaz-studio-view/jaz-studio-view.component';
import { JzLogoModule } from '../../library/jz-ui-controls/jz-logo/jz-logo.module';


@NgModule({
  declarations: [
    JazStudioViewComponent,
  
  ],
  imports: [
    CommonModule,
    JazStudioRouterModule,
    JzButtonsModule,
    AppMenusModule,
    JzLogoModule
  ],
  exports: [
    JazStudioViewComponent
  ],
})
export class JazStudioModule { }
