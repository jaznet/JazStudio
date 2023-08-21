import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JzButtonsModule } from '../jz-ui-controls/jz-buttons/jz-buttons.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JzButtonsModule
  ],
  exports: [
    LoginComponent]
})
export class LoginModule { }
