
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { AppRouterModule } from '../../app/app-router/app-router.module';
import { LoginModule } from '../../app/app-login/login.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    JzButtonsModule,
    AppRouterModule,
    LoginModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
