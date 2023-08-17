import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { LoginModule } from '../../library/login/login.module';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    JzButtonsModule,
    LoginModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
