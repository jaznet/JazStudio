import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechanChartComponent } from './techan-chart.component';

const routes: Routes = [
  {
    path: '',
    component: TechanChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechanChartRouterModule { }
