
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzDashContainerComponent } from './jz-dash-container/jz-dash-container.component';



@NgModule({
  declarations: [
    JzDashContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [JzDashContainerComponent]
})
export class JzDashModule { }
