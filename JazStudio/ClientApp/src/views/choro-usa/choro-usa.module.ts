import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoroUSAComponent } from './choro-usa/choro-usa.component';
import { PopupsModule } from '../../library/jz-ui-controls/j3-popups/popups.module';
import { ChoroUsaRouter } from './choro-usa-router.module';



@NgModule({
  declarations: [
    ChoroUSAComponent
  ],
  imports: [
    CommonModule,
    PopupsModule,
    ChoroUsaRouter
  ],
  exports: [
    ChoroUSAComponent
  ]
})
export class ChoroUSAModule { }
