import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JazStudioViewComponent } from './jaz-studio-view/jaz-studio-view.component';

const routes: Routes = [
  {
    path: '',
    component: JazStudioViewComponent,
//    children: [
//      {
//        path: '',
//        component: JazStudioHomeComponent
//      },
//      {
//        path: 'home',
//        component: JazStudioHome1Component
//      }
//    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JazStudioRouterModule { }
