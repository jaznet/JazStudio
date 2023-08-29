import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizHomeComponent } from './data-viz-home/data-viz-home.component';
import { RouterModule } from '@angular/router';
import { DataVizRoutingModule } from './data-viz-nav/data-viz-routing.module';
import { DataVizMenuComponent } from './data-viz-nav/data-viz-menu/data-viz-menu.component';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { JzMenusModule } from '../../library/jz-ui-controls/jz-menus/jz-menus.module';
import { DatavizViewComponent } from './dataviz-view/dataviz-view.component';

@NgModule({
  declarations: [
    DatavizViewComponent,
    DataVizHomeComponent,
    DataVizMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    JzMenusModule,
    JzButtonsModule,
    DataVizRoutingModule
  ],
  exports: [
    DatavizViewComponent
  ]
})
export class DatavizModule { }
