import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox/sandbox.component';
import { RouterModule } from '@angular/router';
import { SandboxMenuModule } from './sandbox-nav/sandbox-menu.module';



@NgModule({
  declarations: [
    SandboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SandboxMenuModule
  ],
  exports: [
    SandboxComponent
  ]
})
export class SandboxModule { }
