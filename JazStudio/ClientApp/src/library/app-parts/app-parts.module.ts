import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { JzButtonsModule } from '../jz-ui-controls/jz-buttons/jz-buttons.module';
import { AppMenusModule } from '../app-menus/app-menus.module';



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
