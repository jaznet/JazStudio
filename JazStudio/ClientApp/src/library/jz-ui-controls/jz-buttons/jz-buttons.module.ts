import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JzTabComponent } from './jz-tab/jz-tab.component';
import { JzRadioButtonComponent } from './jz-radio-button/jz-radio-button.component';
import { JzButtonComponent } from './jz-button/jz-button.component';


@NgModule({
  declarations: [
    JzTabComponent,
    JzRadioButtonComponent,
    JzButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    JzTabComponent,
    JzRadioButtonComponent,
    JzButtonComponent
  ],
})
export class JzButtonsModule { }
