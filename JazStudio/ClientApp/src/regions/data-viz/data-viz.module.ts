import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVizComponent } from './data-viz/data-viz.component';



@NgModule({
  declarations: [
    DataVizComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataVizComponent
  ]
})
export class DataVizModule { }
