import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    JzButtonsModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
