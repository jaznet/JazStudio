import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SandboxComponent } from '../sandbox/sandbox.component';
import { SandboxHomeComponent } from '../sandbox-home/sandbox-home.component';
import { ChoroUSAComponent } from '../../../views/choro-usa/choro-usa/choro-usa.component';
import { SyncDashComponent } from '../../../views/sync-dash/sync-dash/sync-dash.component';
import { ChorodashComponent } from '../../../views/chorodash/chorodash/chorodash.component';
import { JzDashboardViewComponent } from '../../../views/jz-dashboard-view/jz-dashboard-view/jz-dashboard-view.component';
import { ViewTechnicalChartComponent } from '../../../views/charts/view-technical-chart/view-technical-chart/view-technical-chart.component';

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
        path: 'chorousa',
      /*  component:ChoroUSAComponent*/
        loadChildren: () => import('../../../views/choro-usa/choro-usa.module').then(m => m.ChoroUSAModule)
      
      },
      {
        path: 'home',
        component: SandboxHomeComponent
      },
     
      {
        path: 'syncdash',
        component: SyncDashComponent
      },
      {
        path: 'jzdash',
        component: JzDashboardViewComponent
      },
      {
        path: 'chorodash',
        component: ChorodashComponent
      },
      {
        path: 'technical',
       /* component: ViewTechnicalChartComponent,*/
        loadChildren: () => import('../../../views/charts/view-technical-chart/view-technical-chart.module').then(m => m.ViewTechnicalChartModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule { }
