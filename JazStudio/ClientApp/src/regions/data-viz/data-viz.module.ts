import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizComponent } from './data-viz/data-viz.component';
import { DataVizRoutingModule } from './data-viz/data-viz-routing.module';



@NgModule({
  declarations: [
    DataVizComponent
  ],
  imports: [
    CommonModule,
    DataVizRoutingModule
  ],
  exports: [
    DataVizComponent
  ]
})
export class DataVizModule { }
