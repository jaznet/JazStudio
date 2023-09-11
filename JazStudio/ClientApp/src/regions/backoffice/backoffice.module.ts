import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeViewComponent } from './backoffice-view/backoffice-view.component';
import { BackofficeHomeComponent } from './backoffice-home/backoffice-home.component';
import { BackofficeMenuComponent } from './backoffice-menu/backoffice-menu.component';
import { RouterModule } from '@angular/router';
import { BackofficeRoutingModule } from './backoffice-routing/backoffice-routing.module';
import { JzButtonsModule } from '../../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { JzMenusModule } from '../../library/jz-components/jz-menus/jz-menus.module';



@NgModule({
  declarations: [
    BackofficeViewComponent,
    BackofficeHomeComponent,
    BackofficeMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BackofficeRoutingModule,
    JzMenusModule,
    JzButtonsModule,
  ],
  exports: [
    BackofficeViewComponent,
    BackofficeHomeComponent,
    BackofficeMenuComponent
  ]
})
export class BackofficeModule { }
