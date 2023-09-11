import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from '../sandbox/sandbox.component';
import { SandboxHomeComponent } from '../sandbox-home/sandbox-home.component';
import { ChoroUSAComponent } from '../../../views/choro-usa/choro-usa/choro-usa.component';
import { SyncDashComponent } from '../../../views/sync-dash/sync-dash/sync-dash.component';
import { JzDashViewComponent } from '../../../views/jz-dash/jz-dash-view/jz-dash-view.component';

const routes: Routes = [
  {
    path: '',
    component: SandboxComponent,
    children: [
      {
        path: '',
        component: SandboxHomeComponent
      },
      {
        path: 'home',
        component: SandboxHomeComponent
      },
      {
        path: 'chorousa',
        component: ChoroUSAComponent
      },
      {
        path: 'syncdash',
        component: SyncDashComponent
      },
      {
        path: 'jzdash',
        component: JzDashViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule { }
