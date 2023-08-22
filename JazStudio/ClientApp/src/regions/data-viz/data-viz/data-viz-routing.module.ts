import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVizComponent } from './data-viz.component';

const routes: Routes = [
  {
    path: '',
    component: DataVizComponent,
    children: [
      {
        path: 'home',
        component: DataVizComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataVizRoutingModule { }
