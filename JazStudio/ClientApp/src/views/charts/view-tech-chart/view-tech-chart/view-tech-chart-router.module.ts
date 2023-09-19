import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JzTechnicalChartComponent } from '../../../../library/jz-components/jz-charts/jz-technical-chart/jz-technical-chart.component';

const routes: Routes = [
  {
    path: '',
    component: JzTechnicalChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTechChartRouter { }
