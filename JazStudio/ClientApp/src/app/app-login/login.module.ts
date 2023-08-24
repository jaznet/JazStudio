import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from '../../app/app-router/app-router.module';
import { RouterModule } from '@angular/router';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JzButtonsModule,
    RouterModule
  ],
  exports: [
    LoginComponent]
})
export class LoginModule { }
