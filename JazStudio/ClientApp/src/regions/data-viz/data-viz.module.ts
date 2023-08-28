import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizComponent } from './data-viz/data-viz.component';
import { DataVizHomeComponent } from './data-viz-home/data-viz-home.component';
import { RouterModule } from '@angular/router';
import { DataVizMenuModule } from './data-viz-nav/data-viz-menu.module';
import { DataVizRoutingModule } from './data-viz-nav/data-viz-routing.module';

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
