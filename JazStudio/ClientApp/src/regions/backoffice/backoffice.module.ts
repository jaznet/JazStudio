import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeViewComponent } from './backoffice-view/backoffice-view.component';
import { BackofficeHomeComponent } from './backoffice-home/backoffice-home.component';



@NgModule({
  declarations: [
    BackofficeViewComponent,
    BackofficeHomeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackofficeViewComponent,
    BackofficeHomeComponent,
  ]
})
export class BackofficeModule { }
