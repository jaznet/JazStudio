import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { JzMenusModule } from '../../library/jz-ui-controls/jz-menus/jz-menus.module';



@NgModule({
  declarations: [
    AdminViewComponent,
    AdminHomeComponent,
    AdminMenuComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    JzMenusModule,
    JzButtonsModule,
  ]
})
export class AdminModule { }
