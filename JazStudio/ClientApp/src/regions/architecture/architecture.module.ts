import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureViewComponent } from './architecture-view/architecture-view.component';



@NgModule({
  declarations: [
    ArchitectureViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArchitectureViewComponent
  ]
})
export class ArchitectureModule { }
