import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBaseComponent } from './jz-menu-base/jz-menu-base.component';
import { MenuContainerComponent } from './jz-menu-container/jz-menu-container.component';
import { MenuItemBaseComponent } from './j3-menu-item-base/j3-menu-item-base.component';



@NgModule({
  declarations: [
    MenuBaseComponent,
    MenuContainerComponent,
    MenuItemBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuBaseComponent,
    MenuContainerComponent,
    MenuItemBaseComponent
  ],
})
export class JzMenusModule { }
