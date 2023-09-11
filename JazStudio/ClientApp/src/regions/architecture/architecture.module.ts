
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureViewComponent } from './architecture-view/architecture-view.component';
import { ArchitectureHomeComponent } from './architecture-home/architecture-home.component';
import { ArchitectureMenuComponent } from './architecture-menu/architecture-menu.component';
import { RouterModule } from '@angular/router';
import { ArchitectureRoutingModule } from './architecture-routing/architecture-routing.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { JzMenusModule } from '../../library/jz-components/jz-menus/jz-menus.module';


@NgModule({
  declarations: [
    ArchitectureViewComponent,
    ArchitectureHomeComponent,
    ArchitectureMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArchitectureRoutingModule,
    JzMenusModule,
    JzButtonsModule,
  ],
  exports: [
    ArchitectureViewComponent,
    ArchitectureHomeComponent,
    ArchitectureMenuComponent
  ]
})
export class ArchitectureModule { }
