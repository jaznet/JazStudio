import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatavizViewComponent } from '../dataviz-view/dataviz-view.component';
import { ChorodashComponent } from '../../../views/chorodash/chorodash/chorodash.component';
import { DataVizHomeComponent } from '../data-viz-home/data-viz-home.component';

const routes: Routes = [
  {
    path: '',
    component: DatavizViewComponent,
    children: [
      {
        path: 'home',
        component: DataVizHomeComponent
      },
      {
        path: 'chorodash',
        component: ChorodashComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatavizRoutingModule { }
