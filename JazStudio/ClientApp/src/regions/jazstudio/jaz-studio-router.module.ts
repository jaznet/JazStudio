import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JazStudioViewComponent } from './jaz-studio-view/jaz-studio-view.component';
import { JazStudioHomeComponent } from './jaz-studio-home/jaz-studio-home.component';
import { JazStudioHome1Component } from './jaz-studio-home1/jaz-studio-home1.component';

const routes: Routes = [
  {
    path: '',
    component: JazStudioViewComponent,
    children: [
      {
        path: '',
        component: JazStudioHomeComponent
      },
      {
        path: 'home',
        component: JazStudioHome1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JazStudioRouterModule { }
