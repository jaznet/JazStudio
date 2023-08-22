import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizMenuComponent } from './data-viz-menu/data-viz-menu.component';
import { JzMenusModule } from '../../../library/jz-ui-controls/jz-menus/jz-menus.module';


@NgModule({
  declarations: [
    DataVizMenuComponent
  ],
  imports: [
    CommonModule,
    JzMenusModule
  ],
  exports: [
    DataVizMenuComponent
  ]
})
export class DataVizMenuModule { }
