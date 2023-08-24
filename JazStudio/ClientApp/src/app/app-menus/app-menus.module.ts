
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuMainAuxComponent } from './menu-main-aux/menu-main-aux.component';
import { MenuPaletteComponent } from './menu-palette/menu-palette.component';
import { JzMenusModule } from '../../library/jz-ui-controls/jz-menus/jz-menus.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
@NgModule({
  declarations: [
    MainMenuComponent,
    MenuMainAuxComponent,
    MenuPaletteComponent
  ],
  imports: [
    CommonModule,
    JzButtonsModule,
    JzMenusModule
  ],
  exports: [
    MainMenuComponent,
    MenuMainAuxComponent,
    MenuPaletteComponent,
  ]
})
export class AppMenusModule { }
