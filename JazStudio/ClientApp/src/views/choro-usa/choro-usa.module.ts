import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoroUSAComponent } from './choro-usa/choro-usa.component';
import { PopupsModule } from '../../library/jz-ui-controls/j3-popups/popups.module';



@NgModule({
  declarations: [
    ChoroUSAComponent
  ],
  imports: [
    CommonModule,
    PopupsModule
  ]
})
export class ChoroUSAModule { }
