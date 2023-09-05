import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactusComponent } from './form-contactus/form-contactus.component';



@NgModule({
  declarations: [FormContactusComponent],
  imports: [
    CommonModule
  ],
  exports: [FormContactusComponent]
})
export class JzFormsModule { }
