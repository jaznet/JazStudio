import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { J3StudioComponent } from './j3-studio.component';

const routes: Routes = [
  {
    path: '',
    component: J3StudioComponent,
    children: [
      {
        path: '',
        component: J3StudioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class J3StudioRouterModule { }
