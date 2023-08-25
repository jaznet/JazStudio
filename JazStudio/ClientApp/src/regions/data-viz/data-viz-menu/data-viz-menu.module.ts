import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizMenuComponent } from './data-viz-menu/data-viz-menu.component';
import { JzMenusModule } from '../../../library/jz-ui-controls/jz-menus/jz-menus.module';
import { JzButtonsModule } from '../../../library/jz-ui-controls/jz-buttons/jz-buttons.module';


@NgModule({
  declarations: [
    DataVizMenuComponent
  ],
  imports: [
    CommonModule,
    JzMenusModule,
    JzButtonsModule
  ],
  exports: [
    DataVizMenuComponent
  ]
})
export class DataVizMenuModule { }
