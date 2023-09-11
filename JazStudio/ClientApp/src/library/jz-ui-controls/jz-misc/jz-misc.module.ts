import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ElapsedTimeComponent } from './elapsed-time/elapsed-time.component';



@NgModule({
  declarations: [SpinnerComponent, ElapsedTimeComponent],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent, ElapsedTimeComponent],
})
export class JzMiscModule { }
