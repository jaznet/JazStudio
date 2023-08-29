import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizHomeComponent } from './data-viz-home/data-viz-home.component';
import { RouterModule } from '@angular/router';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { JzMenusModule } from '../../library/jz-ui-controls/jz-menus/jz-menus.module';
import { DatavizViewComponent } from './dataviz-view/dataviz-view.component';
import { DatavizMenuComponent } from './dataviz-menu/dataviz-menu.component';
import { DatavizRoutingModule } from './dataviz-routes/dataviz-routing.module';

@NgModule({
  declarations: [
    DatavizViewComponent,
    DataVizHomeComponent,
    DatavizMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    JzMenusModule,
    JzButtonsModule,
    DatavizRoutingModule
  ],
  exports: [
    DatavizViewComponent
  ]
})
export class DatavizModule { }
