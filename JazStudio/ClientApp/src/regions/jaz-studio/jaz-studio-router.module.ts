import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JazStudioComponent } from './jaz-studio.component';

const routes: Routes = [
  {
    path: '',
    component: JazStudioComponent,
    children: [
      {
        path: '',
        component: JazStudioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JazStudioRouterModule { }
