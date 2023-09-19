import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewTechnicalChartComponent } from './view-technical-chart.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTechnicalChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTechnicalChartRouterModule { }
