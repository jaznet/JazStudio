import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SyncChartComponent } from './sync-chart.component';



const routes: Routes = [
  {
    path: '',
    component: SyncChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncChartRouterModule { }
