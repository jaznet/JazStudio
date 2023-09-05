import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JzPopupComponent } from './jz-popup/jz-popup.component';
import { JzPopupBaseComponent } from './jz-popup-base/jz-popup-base.component';



@NgModule({
  declarations: [
    JzPopupComponent,
    JzPopupBaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JzPopupsModule { }
