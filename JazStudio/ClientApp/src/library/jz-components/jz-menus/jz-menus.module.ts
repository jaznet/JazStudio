import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBaseComponent } from './jz-menu-base/jz-menu-base.component';
import { JzMenuContainerComponent } from './jz-menu-container/jz-menu-container.component';
import { MenuItemBaseComponent } from './j3-menu-item-base/j3-menu-item-base.component';



@NgModule({
  declarations: [
    MenuBaseComponent,
    JzMenuContainerComponent,
    MenuItemBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuBaseComponent,
    JzMenuContainerComponent,
    MenuItemBaseComponent
  ],
})
export class JzMenusModule { }
