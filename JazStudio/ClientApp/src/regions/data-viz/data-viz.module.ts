import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizComponent } from './data-viz/data-viz.component';
import { DataVizMenuModule } from './data-viz-menu/data-viz-menu.module';
import { DataVizHomeComponent } from './data-viz-home/data-viz-home.component';
import { RouterModule } from '@angular/router';
import { DataVizRoutingModule } from './data-viz-menu/data-viz-routing.module';

@NgModule({
  declarations: [
    DataVizComponent,
    DataVizHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DataVizMenuModule,
    DataVizRoutingModule
  ],
  exports: [
    DataVizComponent
  ]
})
export class DataVizModule { }
