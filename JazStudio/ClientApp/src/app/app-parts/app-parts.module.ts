import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMenusModule } from '../app-menus/app-menus.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    JzButtonsModule,
    AppMenusModule
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent
  ]
})
export class AppPartsModule { }
