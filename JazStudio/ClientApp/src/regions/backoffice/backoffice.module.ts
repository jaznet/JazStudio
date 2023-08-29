import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice/backoffice.component';



@NgModule({
  declarations: [
    BackofficeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackofficeComponent
  ]
})
export class BackofficeModule { }
