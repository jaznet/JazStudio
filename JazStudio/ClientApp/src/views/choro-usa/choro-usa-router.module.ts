import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JzTechnicalChartComponent } from '../../library/jz-components/jz-charts/jz-tech-chart/jz-technical-chart/jz-technical-chart.component';
import { ChoroUSAComponent } from './choro-usa/choro-usa.component';

const routes: Routes = [
  {
    path: '',
    component: ChoroUSAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoroUsaRouter { }
