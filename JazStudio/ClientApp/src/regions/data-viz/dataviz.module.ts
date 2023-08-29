import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizComponent } from './data-viz/data-viz.component';
import { DataVizHomeComponent } from './data-viz-home/data-viz-home.component';
import { RouterModule } from '@angular/router';
import { DataVizRoutingModule } from './data-viz-nav/data-viz-routing.module';
import { DataVizMenuComponent } from './data-viz-nav/data-viz-menu/data-viz-menu.component';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { JzMenusModule } from '../../library/jz-ui-controls/jz-menus/jz-menus.module';

@NgModule({
  declarations: [
    DataVizComponent,
    DataVizHomeComponent,
    DataVizMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    JzMenusModule,
    JzButtonsModule,
 /*   DataVizMenuComponent,*/
    DataVizRoutingModule
  ],
  exports: [
    DataVizComponent
  ]
})
export class DatavizModule { }
